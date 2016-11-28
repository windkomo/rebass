
import React from 'react'
import withRebass from './withRebass'

/**
 * Component for displaying text in UI
 */

const Text = ({
  size,
  small,
  theme,
  sx,
  ...props
}) => {
  const { fontSizes } = theme

  size = size || (small ? 6 : 4)
  const style = {
    fontSize: fontSizes[size],
    margin: 0,
  }

  return (
    <p
      {...props}
      {...sx(style)}
    />
  )
}

Text.propTypes = {
  /** Sets a smaller font size */
  small: React.PropTypes.bool
}

Text._name = 'Text'

export default withRebass(Text)

