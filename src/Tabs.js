
import React from 'react'
import withRebass from './withRebass'

const Tabs = ({
  theme,
  sx,
  ...props
}) => {
  const { borderColor } = theme

  const style = {
    display: 'flex',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: borderColor,
  }

  return (
    <div
      {...props}
      {...sx(style)}
    />
  )
}

Tabs._name = 'Tabs'

export default withRebass(Tabs)

