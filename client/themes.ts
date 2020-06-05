import { createGlobalStyle } from 'styled-components'

export interface Theme {
  BackgroundMain: string
  BackgroundAccent: string
  TextColour: string
  ForegroundColour: string
  ForegroundAccent1: string
  ForegroundAccent2: string
  ForegroundAccent3: string
  MenuBtnCol: string
  MenuUnderline: string
}

const ThemeMain: Theme = {
  BackgroundMain: '#130329',
  BackgroundAccent: '#5A3E79',
  TextColour: 'white',
  ForegroundColour: '#5A3E79',
  ForegroundAccent1: '#A76286',
  ForegroundAccent2: '#FCA7A5',
  ForegroundAccent3: '#fdc5c4',
  MenuBtnCol: 'white',
  MenuUnderline: '#A76286',
}

const LightTheme: Theme = {
  BackgroundMain: '#217bf3',
  BackgroundAccent: '#e4e4e4',
  TextColour: 'black',
  ForegroundColour: '#1155b0',
  ForegroundAccent1: '#3889f6',
  ForegroundAccent2: '#74acf8',
  ForegroundAccent3: '#74acf8',
  MenuBtnCol: 'white',
  MenuUnderline: 'white',
}

export const appThemes = [ThemeMain, LightTheme]

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${function getTheme<ThemeMain>(props: any) {
      return props.theme.BackgroundMain
    }};
    color: ${function getTheme<ThemeMain>(props: any) {
      return props.theme.TextColour
    }};
    overflow-y: auto;
    font-family: Camphor, Open Sans, Segoe UI, sans-serif;
    height: 100%;
  }
  
  #__next {
    height: 100%;
  }
  
  html {
    height: 100%;
  }
`
