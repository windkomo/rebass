
import React from 'react'
import withRebass from './withRebass'

/**
 * Minimal footer component with top border
 */

const Footer = ({
  theme,
  sx,
  ...props
}) => {
  const { scale, fontSizes, borderColor } = theme

  const style = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: scale[3],
    paddingTop: scale[3],
    paddingBottom: scale[3],
    fontSize: fontSizes[5],
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: borderColor,
  }

  return (
    <footer
      {...props}
      {...sx(style)}
    />
  )
}

Footer._name = 'Footer'

export default withRebass(Footer)

