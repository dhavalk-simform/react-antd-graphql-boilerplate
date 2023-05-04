import { SelectProps } from 'antd'
import { SelectStyle } from './Select.style'

export function Select(props: SelectProps) {
  // @ts-expect-error 'error here'
  return <SelectStyle {...props} />
}
