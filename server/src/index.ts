import 'reflect-metadata'
import { createConnection, getConnectionOptions } from 'typeorm'
import express from 'express'
import session from 'express-session'
import connectSqlite3 from 'connect-sqlite3'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { AuthResolver } from './resolvers/AuthResolver'
import { ObjectiveResolver } from './resolvers/ObjectiveResolver'
import { KeyResultsResolver } from './resolvers/KeyResultsResolver'

// I like to use redis for this: https://github.com/tj/connect-redis
const SQLiteStore = connectSqlite3(session)

;(async () => {
  const app = express()

  app.use(
    session({
      store: new SQLiteStore({
        db: 'database.sqlite',
        concurrentDB: true,
      }),
      name: 'qid',
      secret: process.env.SESSION_SECRET || 'aslkdfjrefwukoiq12312',
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
      },
    })
  )

  // get options from ormconfig.js
  const dbOptions = await getConnectionOptions(
    process.env.NODE_ENV || 'development'
  )
  await createConnection({ ...dbOptions, name: 'default' })

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [AuthResolver, ObjectiveResolver, KeyResultsResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res }),
  })

  apolloServer.applyMiddleware({
    app,
    cors: {
      origin: 'http://localhost:3000',
      credentials: true,
    },
  })
  const port = process.env.PORT || 4000
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/graphql`)
  })
})()
