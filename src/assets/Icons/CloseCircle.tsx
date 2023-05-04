import { IIcon } from './icon.types'

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

export function CloseCircle(props: IIcon) {
  const {
    size = 24,
    onClick,
    verticalAlign,
    marginLeft,
    marginRight,
    color = '#727880',
    className = ''
  } = props
  return (
    <span
      onClick={onClick}
      className={`icon-wrap ${className}`.trim()}
      style={{ marginLeft, marginRight, color }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 24 24"
        style={{ verticalAlign }}
      >
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10zM9.17 14.83l5.66-5.66M14.83 14.83L9.17 9.17"
        />
      </svg>
    </span>
  )
}
