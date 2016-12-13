
import React from 'react'
import createComponent from './create-component'

/**
 * Toolbar component that vertically centers children with display flex
 */

export const styles = ({
  scale,
  colors
}) => ({
  display: 'flex',
  alignItems: 'center',
  minHeight: 48,
  paddingLeft: scale[1],
  paddingRight: scale[1],
  color: colors.white,
  backgroundColor: colors.black
})

const Toolbar = createComponent('div', styles, {
  name: 'Toolbar'
})

export default Toolbar

