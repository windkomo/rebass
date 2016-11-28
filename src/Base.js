
import React from 'react'
import withRebass from './withRebass'

const Base = ({
  theme,
  subStyles,
  transformStyle,
  ...props
}) => (
  <div {...props} />
)

export default withRebass(Base)

