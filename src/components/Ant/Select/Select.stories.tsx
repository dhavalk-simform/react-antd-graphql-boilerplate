import { SelectProps } from 'antd'
import { Select } from './Select'

interface ISelect {
  (props: SelectProps): JSX.Element
  args?: SelectProps
}

export default {
  title: 'Ant Design/Select',
  component: Select
}

function Template(args: SelectProps) {
  return <Select {...args} />
}

export const Default: ISelect = Template.bind({})
Default.args = {}
