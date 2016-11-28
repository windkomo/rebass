
import React from 'react'
import withRebass from './withRebass'

/**
 * Dot indicator buttons for use in carousels
 */

const DotIndicator = ({
  length,
  active,
  onClick,
  children,
  theme,
  sx,
  ...props
}) => {
  const { scale } = theme

  const styles = {
    root: {
      display: 'inline-flex'
    },
    button: {
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
    },
    dot: {
      width: scale[1],
      height: scale[1],
      margin: 'auto',
      backgroundColor: 'currentcolor',
      borderRadius: 99999,
    }
  }

  const handleClick = (i) => {
    return (e) => {
      e.preventDefault()
      onClick(i)
    }
  }

  const dots = Array.from({ length }, (a, b) => b)

  return (
    <div
      {...props}
      {...sx(styles.roo)}>
      {dots.map((d) => (
        <button
          key={d}
          {...sx(styles.button, {
            opacity: d !== active ? 0.375 : 0.875
          })}
          onClick={handleClick(d)}>
          <div {...sx(styles.dot)} />
        </button>
      ))}
    </div>
  )
}

DotIndicator.propTypes = {
  /** Number of dot buttons to show */
  length: React.PropTypes.number,
  /** Index of the currently active dot */
  active: React.PropTypes.number,
  /** Click event callback - returns index of clicked button */
  onClick: React.PropTypes.func
}

DotIndicator.defaultProps = {
  onClick: function () {}
}

DotIndicator._name = 'DotIndicator'

export default withRebass(DotIndicator)

