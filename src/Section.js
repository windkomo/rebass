
import React from 'react'
import withRebass from './withRebass'

/**
 * Section element with vertical padding
 */

const Section = ({
  theme,
  sx,
  ...props
}) => {
  const { scale } = theme

  const style = {
    paddingTop: scale[4],
    paddingBottom: scale[4],
  }

  return (
    <section
      {...props}
      {...sx(style)}
    />
  )
}

Section._name = 'Section'

export default withRebass(Section)

