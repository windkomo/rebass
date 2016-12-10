
import React from 'react'
import createComponent from './create-component'

/**
 * Image for use within the Card component
 */

export const styles = ({ scale }) => ({
  display: 'block',
  width: `calc(100% + ${2 * scale[1]}px)`,
  maxWidth: 'none',
  height: 'auto',
  margin: -scale[1],
  marginBottom: scale[1]
})

const CardImage = createComponent('img', styles, {
  name: 'CardImage'
})

export default CardImage

