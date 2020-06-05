import { useQuery, useMutation } from '@apollo/react-hooks'
import { getUserId, logoutMutation } from '../components/Login/authMutations'

export const useAuthed = () => {
  const {
    data: { loggedInUser },
  } = useQuery(getUserId)

  const [logout] = useMutation(logoutMutation())

  return { loggedInUser, logout }
}
