
import React from 'react'
import createComponent from './create-component'

/**
 * Carousel that wraps children and displays one at a time
 */

export const styles = {
  root: {
    overflow: 'hidden'
  },
  inner: (theme, { index, length }) => ({
    whiteSpace: 'nowrap',
    height: '100%',
    transition: 'transform .2s ease-out',
    transform: `translateX(${index % length * -100}%)`,
  }),
  slide: {
    display: 'inline-block',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    width: '100%',
    height: '100%'
  }
}

const Slide = createComponent('div', styles.slide)

const Inner = createComponent('div', styles.inner)

const Base = ({ index = 0, ...props }) => {
  const length = props.children ? (props.children.length || 0) : 0

  const children = React.Children.map(props.children, (child, i) => {
    return (
      <Slide children={child} />
    )
  })

  return (
    <div {...props}>
      <Inner index={index} length={length}>
        {children}
      </Inner>
    </div>
  )
}

const Carousel = createComponent(Base, styles.root, {
  name: 'Carousel'
})

export default Carousel

