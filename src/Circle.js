
import React from 'react'
import createComponent from './create-component'

export const styles = (theme, {
  size = 32
}) => ({
  display: 'inline-block',
  width: size,
  height: size,
  textAlign: 'center',
  fontWeight: 'bold',
  lineHeight: size + 'px',
  overflow: 'hidden',
  border: '1px solid',
  borderRadius: 99999
})

const Circle = createComponent('div', styles, {
  name: 'Circle',
  removeProps: [
    'size'
  ]
})

export default Circle

