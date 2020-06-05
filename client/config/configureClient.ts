import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import withApollo from 'next-with-apollo'
import { createHttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'
import { SERVER } from './index'

import { typeDefs, resolvers } from '../resolvers'

const link = createHttpLink({
  fetch,
  uri: SERVER,
  credentials: 'include',
})

const cache = new InMemoryCache()

export const withData = withApollo(
  () =>
    new ApolloClient({
      link,
      cache,
      typeDefs,
      resolvers,
    })
)

cache.writeData({
  data: {
    loggedInUser: null,
  },
})
