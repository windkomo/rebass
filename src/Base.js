
import React from 'react'
import withRebass from './withRebass'

const Base = ({
  theme,
  sx,
  ...props
}) => (
  <div {...props} />
)

export default withRebass(Base)

