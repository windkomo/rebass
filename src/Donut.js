
import React from 'react'
import withRebass from './withRebass'

const M = 'M'
const A = 'A'
const L = 'L'
const rad = (a) => Math.PI * a / 180
const rx = (c, r, a) => c + r * Math.cos(rad(a))
const ry = (c, r, a) => c + r * Math.sin(rad(a))

const createPath = (size, value, strokeWidth) => {
  const c = Math.abs(size) / 2 // Center
  const r1 = c // Outer radius
  const r2 = c - Math.abs(strokeWidth) // Inner radius
  const angle = Math.abs(value % 1) * 360 - 90

  const largeArc = value > 0.5 ? 1 : 0

  const arc1 = value === 1 ? [
    A, r1, r1, 0, 0, 1, c, c + r1,
    A, r1, r1, 0, 0, 1, c, c - r1
  ] : [
    A, r1, r1, 0, largeArc, 1,
    rx(c, r1, angle), ry(c, r1, angle)
  ]

  const arc2 = value === 1 ? [
    A, r2, r2, 0, 0, 0, c, c + r2,
    A, r2, r2, 0, 0, 0, c, c - r2
  ] : [
    A, r2, r2, 0, largeArc, 0, c, c - r2
  ]

  return [
    M, c, c - r1,
    ...arc1,
    L, rx(c, r2, angle), ry(c, r2, angle),
    ...arc2
  ].join(' ')
}

const createBg = (size, strokeWidth) => {
  const c = Math.abs(size) / 2 // Center
  const r1 = c // Outer radius
  const r2 = c - Math.abs(strokeWidth) // Inner radius

  return [
    M, c, 0,
    A, r1, r1, 0, 0, 1, c, size,
    A, r1, r1, 0, 0, 1, c, 0,
    M, c, c - r2,
    A, r2, r2, 0, 0, 0, c, c + r2,
    A, r2, r2, 0, 0, 0, c, c - r2
  ].join(' ')
}

/**
 * A single-value donut chart with percentage
 */

const Donut = ({
  value,
  size,
  strokeWidth,
  children,
  theme,
  subStyles,
  transformStyle,
  ...props
}) => {
  const { bold, colors } = theme

  const viewBox = `0 0 ${size} ${size}`

  const sx = {
    root: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: size / 4,
      fontWeight: bold,
      lineHeight: 1,
      width: size,
      height: size,
      color: colors.primary,
    },
    svg: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      fill: 'currentcolor',
      ...subStyles.svg
    },
    bg: {
      opacity: 1 / 16,
      ...subStyles.background
    },
    percentage: {
      marginRight: '-.25em',
      ...subStyles.percentage
    },
    unit: {
      fontSize: '.5em',
      verticalAlign: 'super',
      ...subStyles.unit
    }
  }

  return (
    <div
      {...props}
      {...transformStyle(props, sx.root)}>
      <svg
        viewBox={viewBox}
        width={size}
        height={size}
        {...transformStyle({}, sx.svg)}>
        <path
          d={createBg(size, strokeWidth)}
          {...transformStyle({}, sx.bg)} />
        <path d={createPath(size, value, strokeWidth)} />
      </svg>
      {children}
      {!children &&
        <span {...transformStyle({}, sx.percentage)}>
          {Math.round(value * 100)}
          <span {...transformStyle({}, sx.unit)}>%</span>
        </span>
      }
    </div>
  )
}

Donut.propTypes = {
  /** Value from 0 to 1 */
  value: React.PropTypes.number,
  /** Sets width and height */
  size: React.PropTypes.number,
  /** Sets width of stroke */
  strokeWidth: React.PropTypes.number
}

Donut.defaultProps = {
  value: 0,
  size: 128,
  strokeWidth: 8
}

Donut._name = 'Donut'

export default withRebass(Donut)

