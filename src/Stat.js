
import React from 'react'
import createComponent from './create-component'

/**
 * Styled number display for statistics
 */

export const styles = {
  root: {
    display: 'inline-block'
  },
  value: ({ typeScale, bold, scale }) => ({
    fontSize: typeScale[0],
    fontWeight: bold,
    lineHeight: 1
  }),
  unit: ({ typeScale, bold }) => ({
    display: 'inline-block',
    fontSize: typeScale[3],
    fontWeight: bold
  }),
  label: ({ typeScale, bold }) => ({
    fontSize: typeScale[6],
    fontWeight: bold,
    lineHeight: 1
  })
}

export const StatLabel = createComponent('div', styles.label)

export const StatValue = createComponent('div', styles.value)

export const StatUnit = createComponent('div', styles.unit)

const Base = ({
  value,
  unit,
  label,
  ...props
}) => {
  return (
    <div {...props}>
      <StatValue>
        {value}
        {unit && (<StatUnit children={unit} />)}
      </StatValue>
      {label && (<StatLabel children={label} />)}
    </div>
  )
}

const Stat = createComponent(Base, styles.root, {
  name: 'Stat'
})

export default Stat

