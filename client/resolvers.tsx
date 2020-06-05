import gql from 'graphql-tag'
import { ApolloCache } from 'apollo-cache'
import { Resolvers } from 'apollo-client'

export const typeDefs = gql`
  extend type Query {
    userDetails: UserDetails!
  }

  extend type UserDetails {
    loggedInUser: ID
  }

  extend type Mutation {
    updateUserDetails(loggedInUser: ID): UserDetails!
  }
`

export const getIsAuthedQuery = () => gql`
  query userId {
    state @client {
      appState {
        loggedInUser
      }
    }
  }
`

type ResolverFn = (
  parent: any,
  args: any,
  { cache }: { cache: ApolloCache<any> }
) => any

interface ResolverMap {
  [field: string]: ResolverFn
}

interface AppResolvers extends Resolvers {
  SetUser: ResolverMap
}

export const resolvers = {
  Query: {
    userDetails(parent, args, { cache }) {
      console.log('USERdETAILS', args, cache)
      return { loggedInUser: null }
    },
  },
  Mutation: {
    updateUserDetails(...args) {
      console.log('RESOLVER', args)
      return { loggedInUser: null }
    },
  },
}
