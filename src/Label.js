
import React from 'react'
import withRebass from './withRebass'

/**
 * Label element for form controls
 */

const Label = ({
  hide,
  theme,
  sx,
  ...props
}) => {
  const { fontSizes, bold } = theme

  const hideStyle = hide ? {
    position: 'absolute',
    height: 1,
    width: 1,
    overflow: 'hidden',
    clip: 'rect(1px, 1px, 1px, 1px)'
  } : {}

  const style = {
    fontSize: fontSizes[5],
    fontWeight: bold,
    lineHeight: 1,
    ...hideStyle,
  }

  return (
    <label
      {...props}
      {...sx(style)}
    />
  )
}

Label.propTypes = {
  /** Accessibly hide label for use in high density UI.
   *  This can still cause accessibility issues. Use this with caution.
   */
  hide: React.PropTypes.bool
}

Label._name = 'Label'

export default withRebass(Label)

