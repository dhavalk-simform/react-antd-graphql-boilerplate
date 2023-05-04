import { IColorValue } from './themeColor'

/* eslint-disable */
export const getColor = (themeColor: IColorValue) => ({
  primary: themeColor.primary,
  textNav: themeColor.textNav,
  bodyBG: themeColor.bodyBG,
  componentBG: themeColor.componentBG,
  componentBorder: themeColor.componentBorder,
  textBody: themeColor.textBody,
  switchBG: themeColor.switchBG,
  swithcBGActive: themeColor.switchBGActive,
  switchHandle: themeColor.switchHandle,
  swtichHandleActive: themeColor.swtichHandleActive,
  switchBorder: themeColor.switchBorder,
  checkboxHoverBG: themeColor.checkboxHoverBG,
  checkboxBorder: themeColor.checkboxBorder,
  checkboxTickColor: themeColor.checkboxTickColor,
  checkboxText: themeColor.checkboxText,
  selectSelectedColor: themeColor.selectSelectedColor,
})

export const getAntTheme = (themeColor: IColorValue) => ({
  fontFamily: `'Inter', sans-serif`,
  colorPrimary: themeColor.primary,
  colorPrimaryBg: themeColor.primary,
  colorText: themeColor.textBody
})

export const getComponent = (themeColor: IColorValue) => ({
  Button: {
    controlHeight: 36,
    controlHeightSX: 48,
    controlHeightSM: 32,
    controlHeightLG: 56,
    borderRadius: 8,
    colorBorder: themeColor.primary,
    colorPrimaryBgHover: themeColor.primary,
    colorPrimaryText: themeColor.primary,
    colorText: themeColor.primary
  },
  Input: {
    controlHeight: 40
  },
  Switch: {
    controlHeight: 23,
    colorPrimary: themeColor.switchBGActive,
    colorPrimaryHover: themeColor.switchBGActive
  }
})
