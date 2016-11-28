
import React from 'react'
import withRebass from './withRebass'

/**
 * Progress element
 */

const Progress = ({
  value,
  theme,
  sx,
  ...props
}) => {
  const { scale, colors } = theme

  const css = `
    .Progress_progress::-webkit-progress-bar {
      background-color: ${colors.darken};
    }
    .Progress_progress::-webkit-progress-value {
      background-color: currentcolor;
    }
    .Progress_progress::-moz-progress-bar {
      background-color: currentcolor;
    }
  `.replace(/\n/g, '').replace(/\s\s+/g, ' ')

  const style = {
    display: 'block',
    width: '100%',
    height: 8,
    marginBottom: scale[2],
    overflow: 'hidden',
    border: 0,
    color: colors.primary,
    borderRadius: 9999,
    WebkitAppearance: 'none',
    appearance: 'none',
    '::-webkit-progress-bar': {
      backgroundColor: colors.darken
    },
    '::-webkit-progress-value': {
      backgroundColor: 'currentcolor'
    },
    '::-moz-progress-bar': {
      backgroundColor: 'currentcolor'
    }
  }

  return (
    <progress
      {...props}
      {...sx(style)}
      value={value}
      children={value}
    />
  )
}

Progress.propTypes = {
  /** Value for progress bar */
  value: React.PropTypes.number,
  /** Bar color - can either be a key from the theme colors object or any color value */
  color: React.PropTypes.string
}

Progress._name = 'Progress'

export default withRebass(Progress)

