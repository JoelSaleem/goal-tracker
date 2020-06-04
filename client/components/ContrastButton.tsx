import styled from 'styled-components'

const Button = styled.div`
  color: ${props => props.theme.TextColour};
  background-color: ${props => props.theme.BackgroundAccent};
  width: 100px;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  position: fixed;
  right: 20px;
  bottom: 12px;
`

export const ContrastButton = ({
  onClick,
  children
}: {
  onClick: () => void
  children: string
}) => {
  return <Button onClick={onClick}>{children}</Button>
}
