import React from 'react'

export type IIcon = Pick<
  React.CSSProperties,
  'marginLeft' | 'marginRight' | 'verticalAlign' | 'color'
> & {
  size?: number
  onClick?: React.MouseEventHandler<HTMLSpanElement>
  className?: string
  theme?: 'Default' | 'Dark'
}
