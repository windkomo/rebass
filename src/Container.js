
import React from 'react'
import withRebass from './withRebass'

/**
 * Div with max-width and margin auto for centering content
 */

const Container = ({
  theme,
  subStyles,
  transformStyle,
  ...props
}) => {
  const { scale } = theme

  const sx = {
    maxWidth: 1024,
    paddingLeft: scale[2],
    paddingRight: scale[2],
    margin: 'auto',
  }

  return (
    <div
      {...props}
      {...transformStyle(props, sx)}
    />
  )
}

Container._name = 'Container'

export default withRebass(Container)

