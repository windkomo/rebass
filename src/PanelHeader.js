
import React from 'react'
import createComponent from './create-component'

/**
 * Header for Panel component with vertical centering using flexbox
 */

export const styles = ({
  scale,
  bold,
  borderRadius,
  colors
}) => ({
  display: 'flex',
  alignItems: 'center',
  fontWeight: bold,
  marginTop: -scale[2] - 1,
  marginRight: -scale[2] - 1,
  marginLeft: -scale[2] - 1,
  marginBottom: scale[2],
  padding: scale[2],
  borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
  color: colors.white,
  backgroundColor: colors.blue
})

const PanelHeader = createComponent('div', styles, {
  name: 'PanelHeader'
})

export default PanelHeader

