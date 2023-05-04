import { Checkbox } from 'antd'
import styled from 'styled-components'

export const CheckboxStyle = styled(Checkbox)`
  .ant-checkbox {
    top: -2px;
    &-inner {
      width: 20px;
      height: 20px;
    }
  }
  .ant-checkbox:where(:not(.ant-checkbox-disabled, .ant-checkbox-checked)) {
    & + span {
      color: ${(props) => props.theme.checkboxText};
    }
  }
  .ant-checkbox:where(:not(.ant-checkbox-disabled)) {
    .ant-checkbox-inner {
      background-color: ${(props) => props.theme.switchBG};
      border-color: ${(props) => props.theme.checkboxBorder};
      border-width: 1px;
    }
    &:hover {
      .ant-checkbox-inner {
        background-color: ${(props) => props.theme.checkboxHoverBG};
      }
    }
    &.ant-checkbox-checked {
      .ant-checkbox-inner {
        background-color: ${(props) => props.theme.primary};
        border-color: ${(props) => props.theme.primary};
        &:after {
          border-color: ${(props) => props.theme.checkboxTickColor};
          border-width: 1.5px;
          width: 4.7px;
          height: 11.1px;
          top: 45%;
        }
      }
    }
  }
  .ant-checkbox-disabled {
    .ant-checkbox-inner {
      background-color: ${(props) => props.theme.inputBorder};
      border-color: ${(props) => props.theme.inputBorder};
    }
  }
`
