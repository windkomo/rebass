
import React from 'react'
import createComponent from './create-component'

/**
 * Footer for Panel component with vertical centering using flexbox
 */

export const styles = ({
  typeScale,
  scale,
  borderRadius,
  colors
}) => ({
  fontSize: typeScale[6],
  display: 'flex',
  alignItems: 'center',
  marginTop: scale[2],
  marginRight: -scale[2],
  marginBottom: -scale[2],
  marginLeft: -scale[2],
  padding: scale[2],
  borderTop: '1px solid',
  borderColor: colors.blue,
  borderRadius: `0 0 ${borderRadius}px ${borderRadius}px`
})

const PanelFooter = createComponent('div', styles, {
  name: 'PanelFooter'
})

export default PanelFooter

