
import React from 'react'
import withRebass from './withRebass'

/** Component for displaying flash and error messages */

const Message = ({
  theme,
  sx,
  ...props
}) => {
  const { bold, scale, colors, borderRadius } = theme

  const style = {
    fontWeight: bold,
    display: 'flex',
    alignItems: 'center',
    padding: scale[2],
    marginBottom: scale[2],
    borderRadius,
    color: colors.white,
    backgroundColor: colors.primary,
  }

  return (
    <div
      {...props}
      {...sx(style)}
    />
  )
}

Message._name = 'Message'

export default withRebass(Message)

