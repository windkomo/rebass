
import React from 'react'
import withRebass from './withRebass'

/**
 * Footer for Panel component with vertical centering using flexbox
 */

const PanelFooter = ({
  theme,
  sx,
  ...props
}) => {
  const { scale, borderRadius, fontSizes } = theme

  const style = {
    fontSize: fontSizes[6],
    display: 'flex',
    alignItems: 'center',
    marginTop: scale[2],
    marginRight: -scale[2],
    marginBottom: -scale[2],
    marginLeft: -scale[2],
    padding: scale[2],
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderRadius: `0 0 ${borderRadius}px ${borderRadius}px`,
  }

  return (
    <div
      {...props}
      {...sx(style)}
    />
  )
}

PanelFooter._name = 'PanelFooter'

export default withRebass(PanelFooter)

