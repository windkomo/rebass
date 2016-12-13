
import React from 'react'
import createComponent from './create-component'

/**
 * Pre element for displaying code examples
 */

export const styles = ({
  monospace,
  typeScale,
  scale,
  borderColor
}) => ({
  fontFamily: monospace,
  fontSize: typeScale[5],
  paddingLeft: scale[2],
  marginBottom: scale[2],
  borderLeft: `4px solid ${borderColor}`,
  overflowX: 'scroll'
})

const Pre = createComponent('pre', styles, {
  name: 'Pre'
})

export default Pre

/*
const Pre = ({
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { monospace, scale, fontSizes, borderColor } = theme

  const cx = classnames('Pre', className)

  const sx = {
    fontFamily: monospace,
    fontSize: fontSizes[5],
    paddingLeft: scale[2],
    marginBottom: scale[2],
    borderLeft: `4px solid ${borderColor}`,
    overflowX: 'scroll',
    ...style
  }

  return (
    <pre
      {...props}
      className={cx}
      style={sx} />
  )
}

Pre._name = 'Pre'

export default withRebass(Pre)
*/

