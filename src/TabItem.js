
import React from 'react'
import withRebass from './withRebass'

const TabItem = ({
  is = 'a',
  active,
  theme,
  sx,
  ...props
}) => {
  const { scale, fontSizes, bold, colors } = theme
  const Comp = is

  const style = {
    fontWeight: bold,
    fontSize: fontSizes[5],
    paddingTop: scale[1],
    paddingBottom: scale[1],
    marginRight: scale[2],
    textDecoration: 'none',
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderBottomColor: 'transparent',
    cursor: 'pointer',
    ...(active ? {
      color: colors.primary,
      borderBottomColor: colors.primary,
    } : {})
  }

  return (
    <Comp
      {...props}
      {...sx(style)} />
  )
}

TabItem._name = 'TabItem'

export default withRebass(TabItem)

