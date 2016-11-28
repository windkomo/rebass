
import React from 'react'
import withRebass from './withRebass'
import Button from './Button'

/**
 * Deprecated in favor of Button `circle` prop
 */

const ButtonCircle = ({
  theme,
  subStyles,
  transformStyle,
  ...props
}) => (
  <Button {...props} circle />
)

ButtonCircle._name = 'ButtonCircle'

export default withRebass(ButtonCircle)

