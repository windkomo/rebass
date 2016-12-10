
import React from 'react'
import createComponent from './create-component'

/**
 * Layout container for fixed positioning children
 */

const pos = n => n ? 0 : null

export const styles = (theme, {
  top,
  right,
  bottom,
  left,
  zIndex
}) => ({
  position: 'fixed',
  top: pos(top),
  right: pos(right),
  bottom: pos(bottom),
  left: pos(left),
  zIndex
})

const Fixed = createComponent('div', styles, {
  name: 'Fixed',
  removeProps: [
    'top',
    'right',
    'bottom',
    'left',
    'zIndex'
  ]
})

export default Fixed

