import { RadioProps } from 'antd'
import { Radio } from './Radio'

interface IRadio {
  (props: RadioProps): JSX.Element
  args?: RadioProps
}

export default {
  title: 'Ant Design/Radio',
  component: Radio
}

function Template(args: RadioProps) {
  return <Radio {...args} />
}

export const Default: IRadio = Template.bind({})
Default.args = {}
