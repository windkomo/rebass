
import React from 'react'
import createComponent from './create-component'

/**
 * Inline-block element for adding space between elements
 */

export const styles = ({
  scale
}, { x = 1, auto }) => ({
  display: 'inline-block',
  flex: auto ? '1 1 auto' : null,
  width: scale[x]
})

const Space = createComponent('div', styles, {
  name: 'Space',
  removeProps: [
    'x',
    'auto'
  ]
})

export default Space

