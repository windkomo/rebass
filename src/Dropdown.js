
import React from 'react'
import withRebass from './withRebass'

/**
 * Position relative container for positioning DropdownMenu component
 */

const Dropdown = ({
  theme,
  sx,
  ...props
}) => {
  const style = {
    position: 'relative',
  }

  return (
    <div
      {...props}
      {...sx(style)}
    />
  )
}

Dropdown._name = 'Dropdown'

export default withRebass(Dropdown)

