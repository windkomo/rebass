import React from 'react'
import {
  Card,
  BackgroundImage,
  Subhead
} from '../src'
import { photo } from './constants'

export default props => (
  <Card w={256} {...props}>
    <BackgroundImage
      src={photo}
    />
    <Subhead p={2}>Hello</Subhead>
  </Card>

)
