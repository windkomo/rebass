
import React from 'react'
import createComponent from './create-component'

/**
 * Textarea form element with label
 */

export const styles = ({
  scale,
  colors,
  borderRadius
}) => ({
  fontFamily: 'inherit',
  fontSize: 'inherit',
  display: 'block',
  width: '100%',
  padding: scale[1],
  color: 'inherit',
  backgroundColor: 'transparent',
  border: '1px solid',
  borderColor: colors.gray,
  borderRadius,
  boxShadow: 'none',
  WebkitAppearance: 'none',
  appearance: 'none'
})

const Textarea = createComponent('textarea', styles, {
  name: 'Textarea'
})

export default Textarea

