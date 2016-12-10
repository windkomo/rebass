
import React from 'react'
import createComponent from './create-component'

/**
 * Styled hr element
 */

export const styles = ({
  scale,
  colors
}) => ({
  marginTop: scale[2],
  marginBottom: scale[2],
  border: 0,
  borderBottom: '1px solid',
  borderColor: colors.gray
})

const Divider = createComponent('hr', styles, {
  name: 'Divider'
})

export default Divider

