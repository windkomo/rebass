
import React from 'react'
import withRebass from './withRebass'

/**
 * Styled hr element
 */

const Divider = ({
  width,
  theme,
  subStyles,
  transformStyle,
  ...props
}) => {
  const { scale, borderColor } = theme

  const sx = {
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
      {...transformStyle(props, sx)}
    />
  )
}

Divider.propTypes = {
  /** Sets a fixed width for stylistic options */
  width: React.PropTypes.number
}

Divider._name = 'Divider'

export default withRebass(Divider)

