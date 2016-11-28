
import React from 'react'
import withRebass from './withRebass'
import PanelHeader from './PanelHeader'
import PanelFooter from './PanelFooter'

/**
 * Panel for containing small pieces of information
 */

const Panel = ({
  children,
  theme,
  sx,
  ...props
}) => {
  const { scale, colors, borderRadius } = theme

  const fillStyle = {
    color: colors.black,
    borderColor: colors.gray,
  }

  const { borderColor } = fillStyle

  const style = {
    padding: scale[2],
    marginBottom: scale[2],
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius,
    borderColor: borderColor || colors.primary,
    backgroundColor: colors.white,
  }

  const styledChildren = React.Children.map(children, (child) => {
    if (child.type === PanelHeader) {
      return React.cloneElement(child, {
        style: fillStyle
      })
    } else if (child.type === PanelFooter) {
      return React.cloneElement(child, {
        style: {
          borderColor
        }
      })
    } else {
      return child
    }
  })

  return (
    <div
      {...props}
      {...sx(style)}
      children={styledChildren}
    />
  )
}

Panel._name = 'Panel'

export default withRebass(Panel)

