
import React from 'react'
import { compose, withState } from 'recompose'
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
  Card,
  CardImage,
  Carousel,
  Circle,
  Close,
  Code,
  Container,
  Divider,
  DotIndicator,
  Drawer,
  Dropdown,
  DropdownMenu,
  Label,
} from 'rebass'

const App = ({
  drawerOpen,
  setDrawerOpen
}) => (
  <div id='app'>
    <Banner backgroundImage='https://images.unsplash.com/photo-1459909633680-206dc5c67abb?dpr=2&auto=format&fit=crop&w=1080&h=720&q=80&cs=tinysrgb&crop='>
      <h1>Rebass</h1>
      <DotIndicator
        active={1}
      />
    </Banner>
    <Container p3>
      <div>
        Hello
        <Circle>C</Circle>
        <Badge>Badge</Badge>
        <Code>Code</Code>
      </div>
      <Divider />
      <Card width={256}>
        <CardImage
          src='http://placehold.it/256' />
        <Base
          p2
          white
          bgGreen>
          Base
          <Arrow />
          <Arrow direction='up' />
          <Close onClick={e => alert('close me')} />
        </Base>
      </Card>
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

      <Label>Label</Label>
      <Button
        href='http://jxnblk.com'
        children='Beep' />
      <ButtonOutline
        href='http://jxnblk.com'
        children='Beep' />
      <ButtonOutline
        href='http://jxnblk.com'
        children='Boop' />
      <Divider />
      <Button
        onClick={e => { setDrawerOpen(!drawerOpen) }}
        children='Toggle Drawer'
      />
    </Container>
    <Drawer
      open={drawerOpen}
      backgroundColor='red'
      onDismiss={e => { setDrawerOpen(!drawerOpen) }}>
      Hello Drawer
    </Drawer>
  </div>
)

const withDrawerState = withState('drawerOpen', 'setDrawerOpen', false)

const enhance = compose(
  withDrawerState
)

export default enhance(App)

