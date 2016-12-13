
import React from 'react'
import createComponent from './create-component'

/**
 * Stylized range input with label
 */

export const styles = ({
  scale,
  colors
}, {
  max = 100,
  min = 0,
  value = 0,
  fill,
  height = 6
}) => {
  const percent = (value - min) / (max - min) * 100

  const backgroundImage = fill
    ? `linear-gradient(90deg, currentcolor, currentcolor ${percent}%, transparent ${percent}%)`
    : null

  const thumb = {
    width: scale[2] * 1.5,
    height: scale[2] * 1.5,
    backgroundColor: 'currentcolor',
    border: 0,
    borderRadius: 99999,
    WebkitAppearance: 'none'
  }

  return {
    display: 'block',
    width: '100%',
    margin: 0,
    marginTop: scale[2] - height / 2,
    marginBottom: scale[2] - height / 2,
    cursor: 'pointer',
    color: 'inherit',
    // To do: opacity of currentcolor
    backgroundColor: colors.gray2,
    backgroundImage,
    backgroundClip: 'content-box',
    height,
    borderRadius: 99999,
    WebkitAppearance: 'none',
    appearance: 'none',
    '::-webkit-slider-thumb': {
      ...thumb
    },
    '::-moz-range-thumb': {
      ...thumb
    }
  }
}

const Input = (props) => (
  <input {...props} type='range' />
)

const Slider = createComponent(Input, styles, {
  name: 'Slider',
  removeProps: [
    'fill',
    'height'
  ]
})

export default Slider

