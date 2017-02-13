
import React from 'react'
import { render } from 'react-dom'
import Rebass from 'rebass'

const {
  Button,
  H1,
  H2,
} = Rebass

const App = () => (
  <div>
    <H1>Hello</H1>
    <Button
      p={2}
      m={4}
      children='Button' />
  </div>
)

render(<App />, app)

