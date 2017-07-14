import React from 'react'
import { ButtonOutline } from '../src'

const Demo = props => (
  <ButtonOutline
    {...props}
    children='Hello'
  />
)

Demo.testProps = [
  {},
  { color: 'green' }
]

export default Demo
