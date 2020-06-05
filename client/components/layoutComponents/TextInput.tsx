import styled from 'styled-components'
import { ChangeEvent } from 'react'

const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  border-bottom: 1px solid
    ${({ theme: { ForegroundAccent2 } }) => ForegroundAccent2};
  color: ${({ theme: { TextColour } }) => TextColour};
  margin-right: 12px;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 4px;
`

const Label = styled.div`
  min-width: 100px;
`

interface TextInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  label?: string
  type?: string
  value: string
}

export const TextInput = ({ onChange, label, type, value }: TextInputProps) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Input onChange={onChange} type={type} value={value} />
    </Container>
  )
}
