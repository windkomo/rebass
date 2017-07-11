import React from 'react'
import { Button } from '../src'

const Demo = props => (
  <Button {...props} />
)

Demo.testProps = [
  { children: 'Hello' },
  { children: 'Hello', bg: 'red' },
  { children: 'Hello', bg: 'orange' },
  { children: 'Hello', bg: 'yellow' },
  { children: 'Hello', bg: 'green' },
  { children: 'Hello', bg: 'black' },
  { children: 'Hello', px: 4, py: 3 },
  { children: 'Hello', f: 4 },
  { children: 'Hello', w: [ 1, 1/2 ] },
  { children: 'Hello', is: 'a', href: '#!' },
]

export default Demo
