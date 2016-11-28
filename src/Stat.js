
import React from 'react'
import withRebass from './withRebass'

/**
 * Styled number display for statistics
 */

const Stat = ({
  value,
  label,
  unit,
  topLabel,
  theme,
  sx,
  ...props
}) => {
  const { fontSizes, bold, scale } = theme

  const styles = {
    root: {
      display: 'inline-block',
    },
    value: {
      fontSize: fontSizes[0],
      letterSpace: '-.125em',
      fontWeight: bold,
      lineHeight: 1,
      marginTop: topLabel ? scale[1] / 2 : null,
      marginBottom: topLabel ? null : scale[1] / 2,
    },
    unit: {
      fontSize: fontSizes[3],
    },
    label: {
      fontSize: fontSizes[6],
      fontWeight: bold,
      lineHeight: 1,
    }
  }

  return (
    <div
      {...props}
      {...sx(styles.root)}>
      {topLabel && <div {...sx(styles.label)}>{label}</div>}
      <div {...sx(styles.value)}>
        {value}
        {unit && <span {...sx(styles.unit)}>{unit}</span>}
      </div>
      {!topLabel && <div {...sx(styles.label)}>{label}</div>}
    </div>
  )
}

Stat.propTypes = {
  /** Value for stat shown in large font size */
  value: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  /** Optional unit for displaying next to value */
  unit: React.PropTypes.string,
  /** Label for stat */
  label: React.PropTypes.string,
  /** Displays label above value */
  topLabel: React.PropTypes.bool
}

Stat._name = 'Stat'

export default withRebass(Stat)

