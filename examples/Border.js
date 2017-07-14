import React from 'react'
import { Border } from '../src'

const Demo = props => (
  <Border p={2} {...props}>
    Hello
  </Border>
)

Demo.testProps = [
  {},
  { color: 'blue' },
  { borderWidth: 4, color: 'blue' },
  { top: true, bottom: true },
]

export default Demo
