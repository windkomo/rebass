
import React from 'react'
import {
  Base,
  Arrow,
  AspectRatio,
  Avatar,
  Badge,
  Banner,
  Bar,
  Block,
  Blockquote,
  Button,
  ButtonCircle,
  ButtonOutline,
} from 'rebass'

const App = () => (
  <div id='app'>
    <Banner backgroundImage='https://images.unsplash.com/photo-1459909633680-206dc5c67abb?dpr=2&auto=format&fit=crop&w=1080&h=720&q=80&cs=tinysrgb&crop='>
      <h1>Rebass</h1>
    </Banner>
    <div>
      Hello
      <Badge>Badge</Badge>
    </div>
    <Base
      p2
      white
      bgGreen>
      Base
      <Arrow />
      <Arrow direction='up' />
    </Base>
    <Block p2>
      <Bar value={1/2}>Bar</Bar>
      <Bar value={3/4}>Bar</Bar>
    </Block>
    <Blockquote>
      “If one says ‘Red’ (the name of the color) and there are 50 people listening, it can be expected that there will be 50 reds in their minds. And one can be sure that all these reds will be very different.”
    </Blockquote>
    <Avatar src='http://jxnblk.com/avatar/avatar-640.png' />
    {/*
    <AspectRatio bgOrange>AspectRatio</AspectRatio>
    */}

    <Button
      href='http://jxnblk.com'
      children='Beep' />
    <ButtonOutline
      href='http://jxnblk.com'
      children='Beep' />
    <ButtonOutline
      href='http://jxnblk.com'
      children='Boop' />
  </div>
)

export default App

