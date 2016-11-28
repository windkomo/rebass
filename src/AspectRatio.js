
// Fixed aspect ratio component

import React from 'react'
import withRebass from './withRebass'

const AspectRatio = ({
  ratio = 4 / 3,
  theme,
  subStyles,
  transformStyle,
  ...props
}) => {
  const sx = {
    width: '100%',
    height: 0,
    paddingBottom: `${ratio * 100}%`
  }

  return (
    <div
      {...props}
      {...transformStyle(props, sx)}
    />
  )
}

AspectRatio._name = 'AspectRatio'

export default withRebass(AspectRatio)

