
import React from 'react'
import withRebass from './withRebass'

/**
 * Menu component for navigation links and actions
 */

const Menu = ({
  theme,
  sx,
  ...props
}) => {
  const { scale, colors, borderColor, borderRadius } = theme

  const style = {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 128,
    marginBottom: scale[2],
    overflow: 'hidden',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor,
    borderRadius,
    color: colors.black,
    backgroundColor: colors.white,
  }

  return (
    <div
      {...props}
      {...sx(style)}
    />
  )
}

Menu._name = 'Menu'

export default withRebass(Menu)

