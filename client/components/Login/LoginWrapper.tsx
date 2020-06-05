import { useEffect } from 'react'
import { ApolloConsumer, useQuery, useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Card } from '../layoutComponents/Card'
import styled from 'styled-components'
import { TextInput } from '../layoutComponents/TextInput'
import { FlatBtn } from '../layoutComponents/FlatBtn'
import { LoginForm } from './LoginForm'

const CardWrapper = styled.div`
  max-width: 800px;
  max-height: 400px;
  flex: 1;
  height: 100%;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const LoginWrapper = () => {
  return (
    <Container>
      <CardWrapper>
        <Card>
          <LoginForm />
        </Card>
      </CardWrapper>
    </Container>
  )
}
