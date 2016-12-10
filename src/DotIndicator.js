
import React from 'react'
import createComponent from './create-component'

/**
 * Dot indicator buttons for use in carousels
 */

export const styles = {
  root: {
    display: 'inline-flex'
  },
  button: ({ scale }, { active }) => ({
    fontSize: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    width: scale[2],
    height: scale[3],
    color: 'inherit',
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    opacity: active ? 7/8 : 3/8
  }),
  dot: ({ scale }) => ({
    width: scale[1],
    height: scale[1],
    margin: 'auto',
    backgroundColor: 'currentcolor',
    borderRadius: 99999
  })
}

export const Button = createComponent('button', styles.button, {
  removeProps: [
    'active'
  ]
})
export const Dot = createComponent('div', styles.dot)

const Base = ({
  active,
  length = 3,
  onClick = () => {},
  ...props
}) => {
  const dots = Array.from({ length }, (a, b) => b)

  return (
    <div {...props}>
      {dots.map(d => (
        <Button
          key={d}
          active={d === active}
          onClick={e => { onClick(d) }}>
          <Dot />
        </Button>
      ))}
    </div>
  )
}

const DotIndicator = createComponent(Base, styles.root, {
  name: 'DotIndicator'
})

export default DotIndicator

