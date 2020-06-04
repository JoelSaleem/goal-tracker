import { MetaWrapper } from '../hoc/MetaWrapper'
import { useState } from 'react'
import Head from 'next/head'
import { CoreLayout } from '../components/CoreLayout'
import { ContrastButton } from '../components/ContrastButton'

export default () => {
  return (
    <MetaWrapper>
      <CoreLayout title='OKR'>
        <div>index body</div>
      </CoreLayout>
    </MetaWrapper>
  )
}
