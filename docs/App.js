
import React from 'react'
import {
  Base,
  Arrow,
  Button
} from 'rebass'

const App = () => (
  <div id='app'>
    <div>Hello</div>
    <Base
      p2
      white
      bgGreen>
      Base
      <Arrow />
      <Arrow direction='up' />
    </Base>

    <Button
      href='http://jxnblk.com'
      children='Boop' />
  </div>
)

export default App

