
import React from 'react'
import createComponent from './create-component'

/** Arrow for use in dropdowns and other UI elements */

export const styles = (theme, {
  direction = 'down'
}) => ({
  display: 'inline-block',
  width: 0,
  height: 0,
  marginLeft: '.5em',
  verticalAlign: 'middle',
  borderRight: '.3125em solid transparent',
  borderLeft: '.3125em solid transparent',
  borderTop: direction === 'down' ? '.4375em solid' : null,
  borderBottom: direction === 'up' ? '.4375em solid' : null,
  pointerEvents: 'none',
})

styles.removeProps = [
  'direction'
]

const Arrow = createComponent('div', styles, 'Arrow')

export default Arrow

