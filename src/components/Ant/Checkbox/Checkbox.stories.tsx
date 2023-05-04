import { CheckboxProps } from 'antd'
import { Checkbox } from './Checkbox'

interface ICheckbox {
  (props: CheckboxProps): JSX.Element
  args?: CheckboxProps
}

export default {
  title: 'Ant Design/Checkbox',
  component: Checkbox
}

function Template(args: CheckboxProps) {
  return <Checkbox {...args} />
}

export const Default: ICheckbox = Template.bind({})
Default.args = {}
