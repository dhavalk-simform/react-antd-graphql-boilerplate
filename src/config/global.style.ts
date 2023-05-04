// eslint-disable-next-line
//@ts-nocheck
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  line-height: 1.5;
  font-family: 'Manrope', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${(props) => props.theme.bodyBG};
  color: ${(props) => props.theme.textBody};
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

a {
  text-decoration: none;
}

.ant-row {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.ant-col:first-child {
  padding-left: 0 !important;
}

.ant-col:last-child {
  padding-right: 0 !important;
}

.ant-select:not(.ant-select-customize-input) .ant-select-selector {
  background-color: ${(props) => props.theme.componentBG};
  border-color: ${(props) => props.theme.componentBorder};
}

.ant-select-single.ant-select-open .ant-select-selection-item {
  color: ${(props) => props.theme.textBody};
}

.ant-select-dropdown {
  background-color: ${(props) => props.theme.componentBG};
  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    color: ${(props) => props.theme.selectSelectedColor};
  }
}

#root {
  display: grid;
  min-height: 100vh;
  place-content: center;
  place-items: center;
  gap: 20px;
}
`

export default GlobalStyle
