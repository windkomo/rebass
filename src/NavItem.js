
import React from 'react'
import createComponent from './create-component'

/**
 * Link for use in navigation. Inherits color
 */

export const styles = ({
  typeScale,
  bold,
  scale
}, { active }) => ({
  fontSize: typeScale[5],
  fontWeight: bold,
  lineHeight: '1rem',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'stretch',
  padding: scale[1],
  color: 'inherit',
  cursor: 'pointer',
  // To do: hover/focus/active styles
})

const NavItem = createComponent('a', styles, {
  name: 'NavItem'
})

export default NavItem

