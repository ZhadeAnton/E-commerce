import React from 'react'
import { CustomButtonContainer } from './custom-button.styles'

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer type={props.type} onClick={props.onClick} {...props}>
    {children}
  </CustomButtonContainer>
)

export default CustomButton