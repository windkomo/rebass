
import React from 'react'
import createComponent from './create-component'

export const styles = ({
  scale,
  bold,
  colors
}, {
  value = 0,
  // To do: handle bar color
  backgroundColor
}) => {
  const p = `${value * 100}%`
  const backgroundImage = `linear-gradient(90deg, ${backgroundColor || colors.blue} ${p}%, transparent ${p})`

  return {
    fontWeight: bold,
    padding: scale[1],
    backgroundSize: '100% 100%',
    backgroundImage,
    backgroundColor: 'transparent'
  }
}

styles.removeProps = [
  'value',
  'color'
]

const Bar = createComponent('div', styles, {
  name: 'Bar'
})

export default Bar

