
import React from 'react'
import createComponent from './create-component'

/**
 * Binary toggle switch component
 */

export const styles = {
  root: ({ scale, colors }, { checked }) => ({
    display: 'inline-flex',
    width: scale[3] * 1.5,
    height: scale[3],
    color: checked ? colors.green : colors.gray,
    backgroundColor: checked ? 'currentcolor' : null,
    borderRadius: 99999,
    boxShadow: 'inset 0 0 0 2px',
    cursor: 'pointer'
  }),
  dot: ({ scale, colors }, { checked }) => ({
    width: scale[3],
    height: scale[3],
    transitionProperty: 'transform, color',
    transitionDuration: '.1s',
    transitionTimingFunction: 'ease-out',
    transform: checked ? `translateX(${scale[3] / 2}px)` : 'translateX(0)',
    boxShadow: 'inset 0 0 0 2px',
    borderRadius: 99999,
    color: checked ? colors.green : colors.gray,
    backgroundColor: colors.white
  })
}

const Dot = createComponent('div', styles.dot, {
  removeProps: [
    'checked'
  ]
})

const Base = ({
  checked,
  ...props
}) => (
  <div {...props}
    role='checkbox'
    aria-checked={checked}>
    <Dot checked={checked} />
  </div>
)

const Switch = createComponent(Base, styles.root, {
  name: 'Switch'
})

export default Switch

