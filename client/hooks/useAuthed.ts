import { useQuery, useMutation } from '@apollo/react-hooks'
import { getUserId, logoutMutation } from '../components/Login/authMutations'

type loginQueryRtn = {
  data: {
    loggedInUser: number | null
  }
}

export const useAuthed = () => {
  const {
    data: { loggedInUser },
  }: loginQueryRtn = useQuery(getUserId)

  const [logout] = useMutation(logoutMutation())

  return { loggedInUser, logout }
}
