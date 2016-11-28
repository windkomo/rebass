
import React from 'react'
import withRebass from './withRebass'

/**
 * Header for Panel component with vertical centering using flexbox
 */

const PanelHeader = ({
  theme,
  sx,
  ...props
}) => {
  const { bold, scale, borderRadius } = theme

  const style = {
    display: 'flex',
    alignItems: 'center',
    fontWeight: bold,
    marginTop: -scale[2] - 1,
    marginRight: -scale[2] - 1,
    marginLeft: -scale[2] - 1,
    marginBottom: scale[2],
    padding: scale[2],
    borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
  }

  return (
    <div
      {...props}
      {...sx(style)}
    />
  )
}

PanelHeader._name = 'PanelHeader'

export default withRebass(PanelHeader)

