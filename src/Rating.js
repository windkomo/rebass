
import React from 'react'
import createComponent from './create-component'

/**
 * Star rating component with clickable buttons
 */

export const styles = {
  root: ({
    typeScale,
    colors
  }) => ({
    display: 'inline-flex',
    fontSize: typeScale[4],
    color: colors.orange
  }),
  button: (theme, { onClick }) => ({
    position: 'relative',
    fontSize: 'inherit',
    lineHeight: 1,
    width: '1em',
    margin: 0,
    padding: '.25em 0',
    border: 0,
    color: 'inherit',
    backgroundColor: 'transparent',
    cursor: onClick ? 'pointer' : null
  }),
  openStar: ({ colors }, { active }) => ({
    display: 'inline-block',
    width: '1em',
    height: '1em',
    color: active ? null : colors.gray
  }),
  filledStar: (theme, {
    active,
    value,
    index
  }) => {
    const clip = (value > index && value < index + 1)
      ? 'rect(0, .5em, 1em, 0)'
      : null
    return {
      position: 'absolute',
      top: '.25em',
      left: 0,
      display: 'inline-block',
      width: '1em',
      height: '1em',
      display: active ? null : 'none',
      clip
    }
  }
}

const Button = createComponent(props => (
  <button {...props} />
), styles.button)

const OpenStar = createComponent(props => (
  <span {...props}>
    ☆
  </span>
), styles.openStar, {
  removeProps: [
    'active'
  ]
})

const FilledStar = createComponent(props => (
  <span {...props}>
    ★
  </span>
), styles.filledStar, {
  removeProps: [
    'active',
    'value',
    'index'
  ]
})


const Base = ({
  value,
  onClick,
  ...props
}) => {
  const stars = Array.from({ length: 5 }, (a, b) => b)

  return (
    <div {...props}>
      {stars.map((i) => (
        <Button
          key={i}
          onClick={e => { onClick(i + 1) }}>
          <OpenStar
            active={i < value}
          />
          <FilledStar
            active={i < value}
            value={value}
            index={i}
          />
        </Button>
      ))}
    </div>
  )
}

const Rating = createComponent(Base, styles.root, {
  name: 'Rating'
})

export default Rating

