
import React from 'react'
import createComponent from './create-component'

/**
 * Minimal footer component with top border
 */

export const styles = ({
  scale,
  typeScale,
  colors
}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  marginTop: scale[3],
  paddingTop: scale[3],
  paddingBottom: scale[3],
  fontSize: typeScale[5],
  borderTop: '1px solid',
  borderColor: colors.gray
})

const Footer = createComponent('footer', styles, {
  name: 'Footer'
})

export default Footer

