import React from 'react'
import { Avatar } from '../src'

const Demo = props => <Avatar {...props} />

Demo.testProps = [
  { src: 'http://placehold.it/96' },
  { src: 'http://placehold.it/256', size: 128 },
]

export default Demo
