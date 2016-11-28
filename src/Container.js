
import React from 'react'
import withRebass from './withRebass'

/**
 * Div with max-width and margin auto for centering content
 */

const Container = ({
  theme,
  sx,
  ...props
}) => {
  const { scale } = theme

  const style = {
    maxWidth: 1024,
    paddingLeft: scale[2],
    paddingRight: scale[2],
    margin: 'auto',
  }

  return (
    <div
      {...props}
      {...sx(style)}
    />
  )
}

Container._name = 'Container'

export default withRebass(Container)

