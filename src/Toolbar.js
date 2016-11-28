
import React from 'react'
import withRebass from './withRebass'

/**
 * Toolbar component that vertically centers children with display flex
 */

const Toolbar = ({
  theme,
  sx,
  ...props
}) => {
  const { scale, colors } = theme

  const style = {
    display: 'flex',
    alignItems: 'center',
    minHeight: 48,
    paddingLeft: scale[1],
    paddingRight: scale[1],
    color: colors.white,
    backgroundColor: colors.black,
  }

  return (
    <div
      {...props}
      {...sx(style)} />
  )
}

Toolbar._name = 'Toolbar'

export default withRebass(Toolbar)

