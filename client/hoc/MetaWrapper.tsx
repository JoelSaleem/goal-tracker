import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { useTheme } from '../hooks/useTheme'
import { appThemes, GlobalStyle } from '../themes'
import { ContrastButton } from '../components/ContrastButton'
import { ReactElement, ReactChild, ReactChildren } from 'react'

export const MetaWrapper = ({
  children,
}: {
  children: ReactChild | ReactChildren
}) => {
  const [idx, switchTheme] = useTheme(appThemes.length)
  return (
    <ThemeProvider theme={appThemes[idx]}>
      <GlobalStyle />
      <Head>
        <meta name='theme-color' content='#5A3E79'></meta>
        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-starturl' content='/' />
        <title>As yet untitled</title>
        <link rel='icon' type='image/png' href='icons/icon192.png' />
        <link rel='apple-touch-icon' href='icons/icon192.png' />
      </Head>
      {children}
      <ContrastButton onClick={switchTheme}>Theme</ContrastButton>
    </ThemeProvider>
  )
}
