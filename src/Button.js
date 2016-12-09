
import React from 'react'
import comp from './create-component'

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

export const BaseButton = comp('button', styles, 'Button')
export const LinkButton = comp('a', styles, 'Button')

const Button = ({
  href,
  ...props
}) => {
  if (href) {
    return <LinkButton {...props} href={href} />
  }

  return <BaseButton {...props} />
}

export default Button

