import styled from 'styled-components'

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  padding: 10px 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 6px;
  background: ${({ theme: { ForegroundAccent1 } }) => ForegroundAccent1};

  &:hover {
    background: ${({ theme: { ForegroundAccent2 } }) => ForegroundAccent2};
  }

  &:active {
    background: ${({ theme: { ForegroundAccent3 } }) => ForegroundAccent3};
  }
`

interface FlatBtnProps {
  onClick: () => void
}

export const FlatBtn: React.FC<FlatBtnProps> = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>
}
