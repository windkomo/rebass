
import React from 'react'
import createComponent from './create-component'

/** Component for displaying small status indicators */

export const styles = ({
  typeScale,
  bold,
  scale,
  colors,
  borderRadius
}) => ({
  fontSize: typeScale[6],
  fontWeight: bold,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlignment: 'baseline',
  height: scale[2],
  padding: scale[1],
  overflow: 'hidden',
  borderRadius,
  color: colors.white,
  backgroundColor: colors.gray
})

const Badge = createComponent('div', styles, {
  name: 'Badge'
})

export default Badge

