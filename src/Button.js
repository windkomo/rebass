
import React from 'react'
import createComponent from './create-component'

/**
 * A general purpose button element with customizable colors
 */

export const styles = ({
  scale,
  bold,
  colors,
  borderRadius
}) => {
  // To do: Add to Input/Select or remove
  // const pady = `calc(${scale[1]}px - 1px)`
  return {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: bold,
    lineHeight: 1.5,
    textDecoration: 'none',
    display: 'inline-block',
    margin: 0,
    paddingTop: scale[1],
    paddingBottom: scale[1],
    paddingLeft: scale[2],
    paddingRight: scale[2],
    color: colors.white,
    backgroundColor: colors.blue,
    border: '1px solid transparent',
    borderRadius,
    // WebkitFontSmoothing: 'antialiased',
    WebkitAppearance: 'none',
    appearance: 'none',
    ':focus': {
      outline: 'none',
      // borderColor: colors.blue,
      // To do: Add darken/lighten colors/functions
      boxShadow: `0 0 0 2px rgba(0, 0, 0, .25)`
    }
  }
}

const ButtonBase = ({ href, ...props }) => (
  href ? <a {...props} href={href} /> : <button {...props} />
)

const Button = createComponent(ButtonBase, styles, {
  name: 'Button'
})

export default Button

