
import React from 'react'
import withRebass from './withRebass'

/**
 * Carousel that wraps children and displays one at a time
 */

const Carousel = ({
  index,
  theme,
  sx,
  ...props
}) => {
  const length = props.children ? (props.children.length || 0) : 0

  const styles = {
    root: {
      overflow: 'hidden'
    },
    inner: {
      whiteSpace: 'nowrap',
      height: '100%',
      transition: 'transform .2s ease-out',
      transform: `translateX(${index % length * -100}%)`,
    },
    child: {
      display: 'inline-block',
      verticalAlign: 'middle',
      whiteSpace: 'normal',
      width: '100%',
      height: '100%',
    }
  }

  const children = React.Children.map(props.children, (child, i) => {
    return (
      <div {...sx(styles.child)}>
        {child}
      </div>
    )
  })

  return (
    <div {...props} {...sx(styles.root)}>
      <div {...sx(styles.inner)}>
        {children}
      </div>
    </div>
  )
}

Carousel.propTypes = {
  /** Index for the child to show */
  index: React.PropTypes.number
}

Carousel._name = 'Carousel'

export default withRebass(Carousel)

