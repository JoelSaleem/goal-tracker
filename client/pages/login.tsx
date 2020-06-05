import { CoreLayout } from '../components/CoreLayout'
import { MetaWrapper } from '../hoc/MetaWrapper'
import { LoginWrapper } from '../components/Login'

export default () => {
  return (
    <MetaWrapper>
      <CoreLayout title='Login'>
        <LoginWrapper />
      </CoreLayout>
    </MetaWrapper>
  )
}
