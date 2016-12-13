
import React from 'react'
import createComponent from './create-component'

/**
 * Progress element
 */

export const styles = ({
  scale,
  colors
}) => ({
  display: 'block',
  width: '100%',
  height: 8,
  marginBottom: scale[2],
  overflow: 'hidden',
  border: 0,
  borderRadius: 99999,
  WebkitAppearance: 'none',
  appearance: 'none',
  '::-webkit-progress-bar': {
    // To do: opacity of currentcolor
    backgroundColor: colors.gray2
  },
  '::-webkit-progress-value': {
    backgroundColor: 'currentcolor'
  },
  '::-moz-progress-bar': {
    backgroundColor: 'currentcolor'
  },
})

const Progress = createComponent('progress', styles, {
  name: 'Progress'
})

export default Progress

