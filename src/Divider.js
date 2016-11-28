
import React from 'react'
import withRebass from './withRebass'

/**
 * Styled hr element
 */

const Divider = ({
  width,
  theme,
  sx,
  ...props
}) => {
  const { scale, borderColor } = theme

  const style = {
    width,
    marginTop: scale[2],
    marginBottom: scale[2],
    border: 0,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: borderColor,
  }

  return (
    <hr
      {...props}
      {...sx(style)}
    />
  )
}

Divider.propTypes = {
  /** Sets a fixed width for stylistic options */
  width: React.PropTypes.number
}

Divider._name = 'Divider'

export default withRebass(Divider)

