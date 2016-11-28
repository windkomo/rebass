
import React from 'react'
import withRebass from './withRebass'

/**
 * Pre element for displaying code examples
 */

const Pre = ({
  theme,
  sx,
  ...props
}) => {
  const { monospace, scale, fontSizes, borderColor } = theme

  const style = {
    fontFamily: monospace,
    fontSize: fontSizes[5],
    paddingLeft: scale[2],
    marginBottom: scale[2],
    borderLeft: `4px solid ${borderColor}`,
    overflowX: 'scroll',
  }

  return (
    <pre
      {...props}
      {...sx(style)}
    />
  )
}

Pre._name = 'Pre'

export default withRebass(Pre)

