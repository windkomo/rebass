
import React from 'react'
import createComponent from './create-component'

/**
 * Unstyled display block link
 */

export const styles = {
  display: 'block',
  textDecoration: 'none',
  color: 'inherit'
  // To do: hover/focus
}

const LinkBlock = createComponent('a', styles, {
  name: 'LinkBlock'
})

export default LinkBlock

