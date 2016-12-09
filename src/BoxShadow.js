
import React from 'react'
import createComponent from './create-component'

/**
 * Box component for adding box shadows
 */

export const styles = ({
  boxShadow
}) => ({
  boxShadow
})

const BoxShadow = createComponent('div', styles, {
  name: 'BoxShadow'
})

export default BoxShadow

