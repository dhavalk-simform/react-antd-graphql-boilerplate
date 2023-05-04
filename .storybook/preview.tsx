import React from 'react'
import { ConfigProvider } from 'antd'
import { ThemeProvider } from 'styled-components'
import useColorConfig from '../src/config/useColorConfig'
import GlobalStyle from '../src/config/global.style'
import {
  getComponent,
  getColor,
  getAntTheme
} from '../src/config/ThemeVariable'

const withTheme = (StoryFn: any) => {
  const [themeColor, handleChange] = useColorConfig()
  return (
    <ConfigProvider
      theme={{
        token: getAntTheme(themeColor),
        inherit: false,
        components: getComponent(themeColor)
      }}
    >
      <ThemeProvider theme={getColor(themeColor)}>
        <StoryFn />
        <GlobalStyle />
      </ThemeProvider>
    </ConfigProvider>
  )
} // export all decorators that should be globally applied in an array export const decorators = [withTheme];

export const decorators = [withTheme]
