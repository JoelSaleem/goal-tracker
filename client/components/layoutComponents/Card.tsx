import styled from 'styled-components'

const Wrapper = styled.div`
  box-shadow: 0 13px 27px -5px rgba(0, 0, 0, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  border-radius: 8px;
  background-color: ${(props) => props.theme.BackgroundAccent};
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 20px;
  margin-top: 16px;
  margin-bottom: 6px;
  margin-right: 12px;
  width: 100%;
  height: 100%;
`

export const Card = ({ children }: { children: any }) => {
  return <Wrapper>{children}</Wrapper>
}
