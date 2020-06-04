import styled from 'styled-components'
import { MenuBar } from './MenuBar'
import { MenuBtnInfo } from './MenuBar'
import { ReactElement, ReactChild, ReactChildren } from 'react'

const BodyContainer = styled.div`
  padding-left: 12px;
  padding-top: 12px;
  display: grid;
  grid-template-rows: 50px 50px 1fr;
  height: 100%;
`

const menuButtons: MenuBtnInfo[] = [
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
    title: 'Login',
    path: '/login',
  },
]

interface CoreLayoutProps {
  children: ReactChild | ReactChildren
  title: string
}

export const CoreLayout = ({ children, title }: CoreLayoutProps) => {
  return (
    <BodyContainer>
      <MenuBar buttons={menuButtons} />
      <h2>{title}</h2>
      {children}
    </BodyContainer>
  )
}
