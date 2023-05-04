import { useState } from 'react'
import CustomTheme from './themeColor'

function useColorConfig() {
  const [themeColor, setThemeColor] = useState(CustomTheme.Default)

  const handleChange = (value: string) => {
    if (value === 'default') {
      setThemeColor(CustomTheme.Default)
    }
    if (value === 'green') {
      setThemeColor(CustomTheme.Green)
    }
    if (value === 'dark') {
      setThemeColor(CustomTheme.Dark)
    }
  }

  return [themeColor, handleChange] as const
}
export default useColorConfig
