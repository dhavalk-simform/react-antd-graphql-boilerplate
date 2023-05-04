import { Radio } from 'antd'
import styled from 'styled-components'

export const RadioStyle = styled(Radio)`
  .ant-radio {
    &-inner {
      width: 20px;
      height: 20px;
    }
  }
  .ant-radio:where(:not(.ant-radio-disabled, .ant-radio-checked)) {
    & + span {
      color: ${(props) => props.theme.checkboxText};
    }
  }
  .ant-radio:where(:not(.ant-radio-disabled)) {
    .ant-radio-inner {
      background-color: ${(props) => props.theme.switchBG};
      border-color: ${(props) => props.theme.checkboxBorder};
      border-width: 1px;
    }
    &:hover {
      .ant-radio-inner {
        background-color: ${(props) => props.theme.checkboxHoverBG};
        border-color: ${(props) => props.theme.primary};
      }
    }
    &.ant-radio-checked {
      .ant-radio-inner {
        background-color: ${(props) => props.theme.primary};
        border-color: ${(props) => props.theme.primary};
        &:after {
          border-color: ${(props) => props.theme.checkboxTickColor};
        }
      }
    }
  }
  .ant-radio-disabled {
    .ant-radio-inner {
      background-color: ${(props) => props.theme.inputBorder};
      border-color: ${(props) => props.theme.inputBorder};
    }
  }
`
