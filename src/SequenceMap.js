
import React from 'react'
import withRebass from './withRebass'
import SequenceMapStep from './SequenceMapStep'

/**
 * Sequence map pattern for use in multi-step forms
 */

const SequenceMap = ({
  steps = [],
  active,
  children,
  theme,
  sx,
  ...props
}) => {
  const { fontSizes, bold, colors } = theme

  const style = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    fontSize: fontSizes[5],
    fontWeight: bold,
    color: colors.gray,
  }

  const chx = React.Children.map(children, (child, i) => {
    return React.cloneElement(child, {
      width: `${1 / children.length * 100}%`,
      first: i === 0,
    })
  })

  const schx = steps.map((step, i) => (
    <SequenceMapStep
      key={i}
      {...step}
      first={i === 0}
      width={`${100 / steps.length}%`}
      active={i <= active}
    />
  ))

  console.log('steps', steps, schx, chx)

  return (
    <div
      {...props}
      {...sx(style)}
      children={chx || schx}
    />
  )
}

SequenceMap.propTypes = {
  /** Array of links for each step in the sequence */
  steps: React.PropTypes.array,
  /** Index of current step */
  active: React.PropTypes.number
}

SequenceMap.defaultProps = {
  steps: []
}

SequenceMap.Step = SequenceMapStep

SequenceMap._name = 'SequenceMap'

export default withRebass(SequenceMap)

