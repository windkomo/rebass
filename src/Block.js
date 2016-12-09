
import React from 'react'
import createComponent from './create-component'

/**
 * Generic box with visual styling
 */

export const styles = {}

const Block = createComponent('div', styles, {
  name: 'Block'
})

export default Block

