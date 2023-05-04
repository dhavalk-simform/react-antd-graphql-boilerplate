/* eslint-disable */
export const xs = (content: any) => `
  @media (min-width: 480px) {
    ${content};
  }
`

export const sm = (content: any) => `
  @media (min-width: 576px) {
    ${content};
  }
`

export const md = (content: any) => `
  @media (min-width: 768px) {
    ${content};
  }
`

export const lg = (content: any) => `
  @media (min-width: 992px) {
    ${content};
  }
`

export const xl = (content: any) => `
  @media (min-width: 1200px) {
    ${content};
  }
`

export const xxl = (content: any) => `
  @media (min-width: 1600px) {
    ${content};
  }
`

export const rem = (pxValue: any) => {
  const ratio = 16 // Set according to the project configuration ratio
  let pxValues: any
  if (Array.isArray(pxValue)) {
     
    pxValue = pxValue[0]
  }
   
  pxValues = parseInt(pxValue, 10)
  return `${pxValues / ratio}rem`
}

const hexToRgb = (hex: any) => {
  // http://stackoverflow.com/a/5624139
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
   
  hex = hex.replace(
    shorthandRegex,
     
    function (m: string, r: string, g: string, b: string) {
      return r + r + g + g + b + b
    }
  )
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return {
    r: parseInt(result![1], 16),
    g: parseInt(result![2], 16),
    b: parseInt(result![3], 16)
  }
}

export const rgba = (hex: string, alpha: number) => {
  const rgbColor = hexToRgb(hex)
  return `rgba(${rgbColor?.r}, ${rgbColor?.g}, ${rgbColor?.b}, ${alpha})`
}
