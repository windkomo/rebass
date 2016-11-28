
import React from 'react'
import withRebass from './withRebass'

/**
 * A circular image for displaying user avatars
 */

const Avatar = ({
  size,
  children,
  theme,
  subStyles,
  transformStyle,
  ...props
}, { rebass }) => {
  const { colors } = theme

  const sx = {
    display: 'inline-block',
    maxWidth: 'none',
    width: size,
    height: size,
    backgroundColor: colors.gray,
    borderRadius: 99999
  }

  return (
    <img
      {...props}
      {...transformStyle(props, sx)}
      width={size}
      height={size}
    />
  )
}

Avatar.propTypes = {
  /** Width and height of image in pixels */
  size: React.PropTypes.number
}

Avatar.defaultProps = {
  size: 48
}

Avatar._name = 'Avatar'

export default withRebass(Avatar)

