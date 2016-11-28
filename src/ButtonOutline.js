
import React from 'react'
import withRebass from './withRebass'
import Button from './Button'

/**
 * A general purpose outline style button element with customizable colors
 */

const ButtonOutline = ({
  active,
  theme,
  sx,
  ...props
}) => {
  const { colors, borderRadius } = theme

  const style = {
    backgroundColor: backgroundColor || 'transparent',
    boxShadow: `inset 0 0 0 1px ${backgroundColor}`,
    borderRadius,
    ...(active ? {
      // To do: handle fill/theme prop shit
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
      {...sx(style)}
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

