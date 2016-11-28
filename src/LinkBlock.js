
import React from 'react'
import withRebass from './withRebass'

/**
 * Unstyled display block link
 */

const LinkBlock = ({
  theme,
  sx,
  ...props
}) => {
  const style = {
    display: 'block',
    textDecoration: 'none',
    color: 'inherit',
  }

  return (
    <a
      {...props}
      {...sx(style)}
    />
  )
}

LinkBlock._name = 'LinkBlock'

export default withRebass(LinkBlock)

