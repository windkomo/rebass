
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
  const pady = `calc(${scale[1]}px - 1px)`
  return {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: bold,
    textDecoration: 'none',
    display: 'inline-block',
    margin: 0,
    paddingTop: pady,
    paddingBottom: pady,
    paddingLeft: scale[2],
    paddingRight: scale[2],
    color: colors.white,
    backgroundColor: colors.blue,
    border: '1px solid transparent',
    borderRadius,
    WebkitFontSmoothing: 'antialiased'
  }
}

const ButtonBase = ({ href, ...props }) => (
  href ? <a {...props} href={href} /> : <button {...props} />
)

const Button = createComponent(ButtonBase, styles, {
  name: 'Button'
})

export default Button

