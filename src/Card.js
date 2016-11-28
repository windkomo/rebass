
import React from 'react'
import withRebass from './withRebass'

/**
 * Styled box with border
 */

const Card = ({
  width,
  theme,
  subStyles,
  transformStyle,
  ...props
}, { rebass }) => {
  const { scale, borderColor, borderRadius } = theme

  const sx = {
    width,
    padding: scale[1],
    marginBottom: scale[2],
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor,
    borderRadius,
    overflow: 'hidden'
  }

  return (
    <div
      {...props}
      {...transformStyle(props, sx)}
    />
  )
}

Card.propTypes = {
  /** Width of card */
  width: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ])
}

Card._name = 'Card'

export default withRebass(Card)

