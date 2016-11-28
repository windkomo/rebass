
import React from 'react'
import withRebass from './withRebass'

/**
 * Box component for adding box shadows
 */

const BoxShadow = ({
  theme,
  sx,
  ...props
}) => {
  const { boxShadow, borderRadius } = theme

  const style = {
    boxShadow,
    borderRadius
  }

  return (
    <div
      {...props}
      {...sx(style)}
    />
  )
}

BoxShadow._name = 'BoxShadow'

export default withRebass(BoxShadow)

