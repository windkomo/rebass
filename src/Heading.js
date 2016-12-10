
import React from 'react'
import createComponent from './create-component'

/**
 * Heading element with no margin and size based on fontSizes scale
 */

export const styles = ({
  typeScale,
  bold
}, {
  level,
  size
}) => ({
  fontSize: typeof size === 'number'
    ? typeScale[size]
    : typeScale[level],
  fontWeight: bold,
  lineHeight: 1.25,
  margin: 0
})

const Base = ({
  level = 2,
  ...props
}) => {
  const Comp = 'h' + level

  return (
    <Comp {...props} />
  )
}

const Heading = createComponent(Base, styles, {
  name: 'Heading',
  removeProps: [
    'size'
  ]
})

export default Heading

