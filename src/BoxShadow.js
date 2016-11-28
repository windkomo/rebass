
import React from 'react'
import withRebass from './withRebass'

/**
 * Box component for adding box shadows
 */

const BoxShadow = ({
  theme,
  subStyles,
  transformStyle,
  ...props
}) => {
  const { boxShadow, borderRadius } = theme

  const sx = {
    boxShadow,
    borderRadius
  }

  return (
    <div
      {...props}
      {...transformStyle(props, sx)}
    />
  )
}

BoxShadow._name = 'BoxShadow'

export default withRebass(BoxShadow)

