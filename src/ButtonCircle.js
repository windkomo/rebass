
import React from 'react'
import Button from './Button'
import createComponent from './create-component'

/**
 * Deprecated in favor of Button `circle` prop
 * Maybe just outright deprecate this
 */

export const styles = () => ({
  borderRadius: 99999
})

const ButtonCircle = createComponent(Button, styles, {
  name: 'ButtonCircle'
})

export default ButtonCircle

