
import React from 'react'
import withRebass from './withRebass'

/**
 * Code element for inline code snippets
 */

const Code = ({
  theme,
  subStyles,
  transformStyle,
  ...props
}) => {
  const { monospace, fontSizes } = theme

  const sx = {
    fontFamily: monospace,
    fontSize: fontSizes[5]
  }

  return (
    <code
      {...props}
      {...transformStyle(props, sx)}
    />
  )
}

Code._name = 'Code'

export default withRebass(Code)

