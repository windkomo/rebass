
import React from 'react'
import withRebass from './withRebass'
import Button from './Button'

/**
 * A general purpose outline style button element with customizable colors
 */

const ButtonOutline = ({
  active,
  theme,
  subStyles,
  transformStyle,
  ...props
}) => {
  const { colors, borderRadius } = theme

  const sx = {
    backgroundColor: backgroundColor || 'transparent',
    boxShadow: `inset 0 0 0 1px ${backgroundColor}`,
    borderRadius,
    ...(active ? {
      color: 'white',
      backgroundColor: 'tomato'
    } : {
      color: backgroundColor,
      backgroundColor: 'transparent'
    }),
  }

  return (
    <Button
      {...props}
      {...transformStyle(props, sx)}
      circle={theme.circle}
    />
  )
}

ButtonOutline.propTypes = {
  /** Pass an href prop to make the ButtonOutline an <a> tag instead of a <button> */
  href: React.PropTypes.string,
  /** Creates a larger button */
  big: React.PropTypes.bool
}

ButtonOutline._name = 'ButtonOutline'

export default withRebass(ButtonOutline)

