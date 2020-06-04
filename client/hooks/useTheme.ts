import { useState } from 'react'

type useThemeReturn = [number, () => void]

export const useTheme = (length: number) => {
  const [index, setIndex] = useState(0)

  const inc = () => {
    setIndex((index + 1) % length)
  }
  return [index, inc] as useThemeReturn
}
