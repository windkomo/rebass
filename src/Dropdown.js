
import React from 'react'
import createComponent from './create-component'

/**
 * Position relative container for positioning DropdownMenu component
 */

export const styles = {
  position: 'relative'
}

const Dropdown = createComponent('div', styles, {
  name: 'Dropdown'
})

export default Dropdown

