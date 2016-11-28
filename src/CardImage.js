
import React from 'react'
import withRebass from './withRebass'

/**
 * Image for use within the Card component
 */

const CardImage = ({
  src,
  children,
  theme,
  sx,
  ...props
}) => {
  const { scale } = theme

  const style = {
    display: 'block',
    width: `calc(100% + ${2 * scale[1]}px)`,
    maxWidth: 'none',
    height: 'auto',
    margin: -scale[1],
    marginBottom: scale[1],
  }

  return (
    <img
      {...props}
      {...sx(style)}
      src={src}
    />
  )
}

CardImage.propTypes = {
  /** Image source */
  src: React.PropTypes.string.isRequired
}

CardImage._name = 'CardImage'

export default withRebass(CardImage)

