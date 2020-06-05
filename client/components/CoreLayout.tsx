import styled from 'styled-components'
import { MenuBar } from './MenuBar'
import { MenuBtnInfo } from './MenuBar'
import { ReactChild, ReactChildren } from 'react'
import { useAuthed } from '../hooks/useAuthed'

const BodyContainer = styled.div`
  padding-left: 12px;
  padding-top: 12px;
  display: grid;
  grid-template-rows: 50px 50px 1fr;
  height: 100%;
`

const getMenuButtons = (isAuthed: boolean): MenuBtnInfo[] => [
  {
    id: 'home',
    title: 'Home',
    path: '/',
  },
  {
    id: 'objectives',
    title: 'Objectives',
    path: '/objectives',
  },
  {
    id: 'stats',
    title: 'Stats',
    path: '/stats',
  },
  {
    id: 'auth',
    title: isAuthed ? 'Logout' : 'Login',
    path: '/login',
  },
]

interface CoreLayoutProps {
  children: ReactChild | ReactChildren
  title: string
}

export const CoreLayout = ({ children, title }: CoreLayoutProps) => {
  const { loggedInUser } = useAuthed()
  return (
    <BodyContainer>
      <MenuBar buttons={getMenuButtons(!!loggedInUser)} />
      <h2>{title}</h2>
      {children}
    </BodyContainer>
  )
}
