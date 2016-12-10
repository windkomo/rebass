
import React from 'react'
import createComponent from './create-component'

/**
 * Label element for form controls
 */

export const styles = ({
  typeScale,
  bold
}, { hide }) => {
  const hideStyle = hide ? {
    position: 'absolute',
    height: 1,
    width: 1,
    overflow: 'hidden',
    clip: 'rect(1px, 1px, 1px, 1px)'
  } : {}

  return {
    fontSize: typeScale[5],
    fontWeight: bold,
    lineHeight: 1,
    ...hideStyle
  }
}

const Label = createComponent('label', styles, {
  name: 'Label',
  removeProps: [
    'hide'
  ]
})

export default Label

