
import React from 'react'
import withRebass from './withRebass'

/**
 * Styled tooltip that shows on hover
 */

const Tooltip = ({
  title,
  children,
  theme,
  sx,
  ...props
}) => {
  const {
    fontSizes,
    scale,
    colors,
    borderRadius
  } = theme

  const styles = {
    root: {
      position: 'relative',
      display: 'inline-block',
      cursor: 'pointer',
      ':hover > div': {
        display: 'block'
      }
    },
    box: {
      position: 'absolute',
      bottom: '100%',
      left: '50%',
      fontSize: fontSizes[6],
      whiteSpace: 'nowrap',
      paddingTop: scale[1] / 2,
      paddingBottom: scale[1] / 2,
      paddingLeft: scale[1],
      paddingRight: scale[1],
      borderRadius,
      transform: 'translate(-50%, -8px)',
      color: colors.white,
      backgroundColor: colors.black,
      display: 'none'
    },
    arrow: {
      position: 'absolute',
      top: '100%',
      left: '50%',
      border: '6px solid transparent',
      borderTopColor: colors.black,
      transform: 'translate(-50%, 0)',
    }
  }

  return (
    <span
      aria-label={title}
      {...sx(styles.root)}>
      <div
        {...props}
        {...sx(styles.box)}>
        {title}
        <div {...sx(styles.arrow)} />
      </div>
      {children}
    </span>
  )
}

Tooltip.propTypes = {
  /** Text to display in tooltip */
  title: React.PropTypes.string
}

Tooltip._name = 'Tooltip'

export default withRebass(Tooltip)

