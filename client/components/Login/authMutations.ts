import gql from 'graphql-tag'

export const loginMutation = (email: string, password: string) => gql`
  mutation {
    login(input: { email: "${email}", password: "${password}" }) {
      user {
        id
        email
      }
    }
  }
`

export const logoutMutation = () => gql`
  mutation {
    logout
  }
`
export const setUserId = gql`
  mutation updateUserDetails {
    loggedInUser @client
  }
`
export const getUserId = gql`
  query userDetails {
    loggedInUser @client
  }
`