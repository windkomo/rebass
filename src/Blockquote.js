
import React from 'react'
import createComponent from './create-component'

/**
 * Stylized blockquote element with citation link
 */

export const styles = ({
  scale,
  typeScale
}) => ({
  fontSize: typeScale[3],
  fontStyle: 'italic',
  margin: 0,
  marginBottom: scale[2]
})

const Blockquote = createComponent('blockquote', styles, {
  name: 'Blockquote'
})

export default Blockquote

