
import React from 'react'
import withRebass from './withRebass'

/**
 * Code element for inline code snippets
 */

const Code = ({
  theme,
  sx,
  ...props
}) => {
  const { monospace, fontSizes } = theme

  const style = {
    fontFamily: monospace,
    fontSize: fontSizes[5]
  }

  return (
    <code
      {...props}
      {...sx(style)}
    />
  )
}

Code._name = 'Code'

export default withRebass(Code)

