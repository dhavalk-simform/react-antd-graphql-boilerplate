export interface IColorValue {
  primary: string
  textNav: string
  bodyBG: string
  componentBG: string
  componentBorder: string
  textBody: string
  switchBG: string
  switchBGActive: string
  switchHandle: string
  swtichHandleActive: string
  switchBorder: string
  checkboxHoverBG: string
  checkboxBorder: string
  checkboxTickColor: string
  checkboxText: string
  selectSelectedColor: string
}

const CustomTheme: Record<'Default' | 'Green' | 'Dark', IColorValue> = {
  Default: {
    primary: '#EA495C',
    textNav: '#FFFFFF',
    bodyBG: '#F6F7F7',
    componentBG: '#FFFFFF',
    componentBorder: '#EEEEEE',
    textBody: '#1B1D1F',
    switchBG: '#EEEEEE',
    switchBGActive: '#7DC066',
    switchHandle: '#FFFFFF',
    swtichHandleActive: '#FFFFFF',
    switchBorder: '#C6C8CB',
    checkboxHoverBG: '#FFFFFF',
    checkboxBorder: '#C6C8CB',
    checkboxTickColor: '#FFFFFF',
    checkboxText: '#727880',
    selectSelectedColor: '#FFFFFF'
  },
  Dark: {
    primary: '#EA495C',
    textNav: '#FFFFFF',
    bodyBG: '#0D1116',
    componentBG: '#171B21',
    componentBorder: '#2E3133',
    textBody: '#FFFFFF',
    switchBG: '#55585A',
    switchBGActive: '#7DC066',
    switchHandle: '#2E3133',
    swtichHandleActive: '#FFFFFF',
    switchBorder: '#3E4043',
    checkboxHoverBG: '#2E3133',
    checkboxBorder: '#3E4043',
    checkboxTickColor: '#0D1116',
    checkboxText: '#898F96',
    selectSelectedColor: '#FFFFFF'
  },
  Green: {
    primary: '#22c55e',
    textNav: '#FFFFFF',
    bodyBG: '#F6F7F7',
    componentBG: '#FFFFFF',
    componentBorder: '#EEEEEE',
    textBody: '#1B1D1F',
    switchBG: '#EEEEEE',
    switchBGActive: '#7DC066',
    switchHandle: '#FFFFFF',
    swtichHandleActive: '#FFFFFF',
    switchBorder: '#C6C8CB',
    checkboxHoverBG: '#FFFFFF',
    checkboxBorder: '#C6C8CB',
    checkboxTickColor: '#FFFFFF',
    checkboxText: '#727880',
    selectSelectedColor: '#FFFFFF'
  }
}

export default CustomTheme
