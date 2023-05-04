import { ButtonProps } from 'antd'
import { Button } from './Button'

interface IButton {
  (props: ButtonProps): JSX.Element
  args?: ButtonProps
}

export default {
  title: 'Ant Design/Button',
  component: Button
}

function Template(args: ButtonProps) {
  return <Button {...args} />
}

const buttonProps: ButtonProps = {
  loading: false,
  type: 'primary',
  size: 'middle',
  children: 'Button'
}

export const Primary: IButton = Template.bind({})
Primary.args = { ...buttonProps }

export const Default: IButton = Template.bind({})
Default.args = { ...buttonProps, type: 'default' }

export const Dashed: IButton = Template.bind({})
Dashed.args = { ...buttonProps, type: 'dashed' }

export const Small: IButton = Template.bind({})
Small.args = { ...buttonProps, size: 'small' }

export const Large: IButton = Template.bind({})
Large.args = { ...buttonProps, size: 'large' }
