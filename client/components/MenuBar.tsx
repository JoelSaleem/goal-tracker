import styled from 'styled-components'
import { MenuButton } from './MenuButton'

export type MenuBtnInfo = {
  id: string
  title: string
  path: string
}

interface MenuBarProps {
  buttons: MenuBtnInfo[]
}

const Container = styled.div`
  width: 100%;
  display: flex;
  padding-left: 12px;
  padding-right: 12px;
`

export const MenuBar = ({ buttons }: MenuBarProps) => {
  const renderButtons = () => {
    return buttons.map(({ id, path, title }) => {
      return (
        <MenuButton id={id} path={path} isSelected={false}>
          {title}
        </MenuButton>
      )
    })
  }

  return <Container>{renderButtons()}</Container>
}
