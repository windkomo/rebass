
import React from 'react'
import withRebass from './withRebass'

/**
 * Position relative container for positioning DropdownMenu component
 */

const Dropdown = ({
  theme,
  subStyles,
  transformStyle,
  ...props
}) => {
  const sx = {
    position: 'relative',
  }

  return (
    <div
      {...props}
      {...transformStyle(props, sx)}
    />
  )
}

Dropdown._name = 'Dropdown'

export default withRebass(Dropdown)

