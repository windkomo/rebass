
import React from 'react'
import createComponent from './create-component'

/**
 * Menu component for navigation links and actions
 */

export const styles = ({
  scale,
  colors,
  borderRadius
}) => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: 128,
  marginBottom: scale[2],
  overflow: 'hidden',
  border: '1px solid',
  borderColor: colors.gray,
  borderRadius,
  color: colors.black,
  backgroundColor: colors.white
})

const Menu = createComponent('div', styles, {
  name: 'Menu'
})

export default Menu

