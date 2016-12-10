
// Fixed aspect ratio component

import React from 'react'
import createComponent from './create-component'

export const styles = (theme, {
  ratio = 3/4
}) => ({
  width: '100%',
  height: 0,
  paddingBottom: `${ratio * 100}%`,
})

const AspectRatio = createComponent('div', styles, {
  name: 'AspectRatio',
  removeProps: [
    'ratio'
  ]
})

export default AspectRatio

