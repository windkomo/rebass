
import React from 'react'
import createComponent from './create-component'
import Button from './Button'

/**
 * A general purpose outline style button element with customizable colors
 */

export const styles = ({ colors }) => ({
  color: colors.blue,
  backgroundColor: 'transparent',
  borderColor: colors.blue,
  ':hover': {
    color: colors.white,
    backgroundColor: colors.blue
  }
})

const ButtonOutline = createComponent(Button, styles, {
  name: 'ButtonOutline'
})

export default ButtonOutline

