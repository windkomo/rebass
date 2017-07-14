import React from 'react'
import {
  Carousel,
  CarouselSlide,
  Heading,
  Relative,
  Absolute,
  Button,
} from '../src'

const hoc = C => C // createProvider({ i: 0 })
const inc = state => ({ i: state.i + 1 })
const dec = state => ({ i: state.i - 1 })

const Live = hoc(props => (
  <Relative>
    <Carousel index={props.i % 3}>
      <CarouselSlide
        py={6}
        bg='gray'>
        <Heading>Hello</Heading>
      </CarouselSlide>
      <CarouselSlide
        py={6}
        color='white'
        bg='blue'>
        <Heading>Hello</Heading>
      </CarouselSlide>
      <CarouselSlide
        py={6}
        color='white'
        bg='green'>
        <Heading>Hello</Heading>
      </CarouselSlide>
    </Carousel>
    <Absolute right bottom>
      <Button
        m={2}
        onClick={e => props.update(dec)}
        children='Back'
      />
      <Button
        m={2}
        onClick={e => props.update(inc)}
        children='Next'
      />
    </Absolute>
  </Relative>
))

export default Live
