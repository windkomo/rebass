
import React from 'react'
import withRebass from './withRebass'

/**
 * A button with an × for close and dismiss actions
 */

const Close = ({
  baseRef,
  theme,
  subStyles,
  ...props
}) => {
  const sx = {
    fontSize: '1.5em',
    lineHeight: 1,
    fontWeight: 'bold',
    margin: 0,
    padding: 0,
    cursor: 'pointer',
    color: 'inherit',
    backgroundColor: 'transparent',
    border: 0,
    WebkitAppearance: 'none',
  }

  return (
    <button
      {...props}
      {...transformStyle(props, sx)}
      ref={baseRef}
      title='Close'
      children='×' />
  )
}

Close.propTypes = {
  /** Adds a ref to the button element */
  baseRef: React.PropTypes.func
}

Close._name = 'Close'

export default withRebass(Close)

