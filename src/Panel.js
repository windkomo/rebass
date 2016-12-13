
import React from 'react'
import createComponent from './create-component'

/**
 * Panel for containing small pieces of information
 */

export const styles = ({
  scale,
  colors,
  borderRadius
}) => ({
  padding: scale[2],
  marginBottom: scale[2],
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius,
  borderColor: colors.blue,
  backgroundColor: colors.white
})

const Panel = createComponent('div', styles, {
  name: 'Panel'
})

export default Panel

