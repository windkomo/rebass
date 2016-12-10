
import React from 'react'
import createComponent from './create-component'

/**
 * Div with max-width and margin auto for centering content
 */

export const styles = ({
  scale
}) => ({
  maxWidth: 1024,
  paddingLeft: scale[2],
  paddingRight: scale[2],
  margin: 'auto'
})

const Container = createComponent('div', styles, {
  name: 'Container'
})

export default Container

