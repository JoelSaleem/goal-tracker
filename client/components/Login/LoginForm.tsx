import { useState } from 'react'
import styled from 'styled-components'
import { TextInput } from '../layoutComponents/TextInput'
import { FlatBtn } from '../layoutComponents/FlatBtn'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { loginMutation, setUserId, getUserId } from './authMutations'
import { useAuthed } from '../../hooks/useAuthed'
import { onLogin, onLogout } from './loginEventHandlers'

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 12px;
`

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const renderEmailField = () => (
    <TextInput
      label='Email'
      onChange={(e) => setEmail(e.target.value)}
      value={email}
    />
  )

  const renderPasswordField = () => (
    <TextInput
      label='Password'
      onChange={(e) => setPassword(e.target.value)}
      type='password'
      value={password}
    />
  )

  const { loggedInUser, logout } = useAuthed()
  console.log(loggedInUser)

  const [loginFn, { loading }] = useMutation(loginMutation(email, password))
  const [persistUserToCache] = useMutation(setUserId)
  const onLoginClicked = async () => {
    await onLogin(loginFn, persistUserToCache)
  }

  const onLogoutClicked = () => {
    onLogout(logout, persistUserToCache)
  }

  return (
    <ContentWrapper>
      Login Form
      {renderEmailField()}
      {renderPasswordField()}
      {loading ? 'Loading' : <FlatBtn onClick={onLoginClicked}>Login</FlatBtn>}
      <FlatBtn onClick={onLogoutClicked}>Logout</FlatBtn>
    </ContentWrapper>
  )
}
