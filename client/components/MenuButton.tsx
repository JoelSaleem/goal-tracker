import styled from 'styled-components'
import Link from 'next/link'
import { ReactElement } from 'react'

const Button = styled.a`
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
  flex: 1;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &#selected {
    border-bottom: ${({ theme: { ForegroundColour } }) => {
      return `1px solid ${ForegroundColour}`
    }};
  }

  &:hover {
    border-bottom: ${({ theme: { ForegroundAccent1 } }) => {
      return `1px solid ${ForegroundAccent1}`
    }};
  }

  &:active {
    border-bottom: ${({ theme: { ForegroundAccent2 } }) => {
      return `1px solid ${ForegroundAccent2}`
    }};
  }
`

interface MenuButtonProps {
  isSelected: boolean
  path: string
  children: string | ReactElement
}

export const MenuButton = ({ children, isSelected, path }: MenuButtonProps) => {
  return (
    <Link href={path}>
      <Button id={isSelected ? 'selected' : ''}>{children}</Button>
    </Link>
  )
}
