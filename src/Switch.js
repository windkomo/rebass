
import React from 'react'
import withRebass from './withRebass'

/**
 * Binary toggle switch component
 */

const Switch = ({
  checked,
  theme,
  sx,
  ...props
}) => {
  const { scale, colors, borderColor } = theme

  const color = checked ? colors.success : borderColor
  const transform = checked ? `translateX(${scale[3] * 0.5}px)` : 'translateX(0)'

  const styles = {
    root: {
      display: 'inline-flex',
      width: scale[3] * 1.5,
      height: scale[3],
      color,
      backgroundColor: checked ? 'currentcolor' : null,
      borderRadius: 99999,
      boxShadow: 'inset 0 0 0 2px',
      cursor: 'pointer',
    },
    dot: {
      width: scale[3],
      height: scale[3],
      transitionProperty: 'transform, color',
      transitionDuration: '.1s',
      transitionTimingFunction: 'ease-out',
      transform,
      boxShadow: 'inset 0 0 0 2px',
      borderRadius: 99999,
      color,
      backgroundColor: colors.white,
    }
  }

  return (
    <div
      {...props}
      role='checkbox'
      aria-checked={checked}
      {...sx(styles.root)}>
      <div {...sx(styles.dot)} />
    </div>
  )
}

Switch.propTypes = {
  /** Sets the Switch to an active style */
  checked: React.PropTypes.bool
}

Switch._name = 'Switch'

export default withRebass(Switch)

