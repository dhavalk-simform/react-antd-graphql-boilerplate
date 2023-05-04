import { PropsWithChildren, createContext, useContext } from 'react'
import { IColorValue } from '../config/themeColor'

type Theme = [theme: IColorValue, setTheme: (value: string) => void]
const ThemeContext = createContext<Theme | null>(null)

export function ThemeContextProvider(
  props: PropsWithChildren<{ value: Theme }>
) {
  return <ThemeContext.Provider {...props} />
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('Invalid hook call')
  }

  return context
}
