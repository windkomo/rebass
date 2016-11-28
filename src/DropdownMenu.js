
import React from 'react'
import withRebass from './withRebass'
import Menu from './Menu'

/**
 * Absolutely positioned Menu component for use within Dropdown component
 */

const DropdownMenu = ({
  open,
  right,
  top,
  children,
  onDismiss,
  theme,
  subStyles,
  transformStyle,
  ...props
}) => {
  const { zIndex } = theme

  const sx = {
    root: {
      display: open ? null : 'none',
      position: 'absolute',
      left: right ? 'auto' : 0,
      right: right ? 0 : 'auto',
      top: top ? 'auto' : '100%',
      bottom: top ? '100%' : 'auto',
      zIndex: 4,
    },
    overlay: {
      position: 'fixed',
      display: open ? null : 'none',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...subStyles.overlay
    },
    content: {
      position: 'relative',
      zIndex: zIndex[1],
      ...subStyles.content
    },
    Menu: {
      ...subStyles.Menu
    }
  }

  return (
    <div
      {...props}
      {...transformStyle(props, sx.root)}>
      <div
        {...transformStyle({}, sx.overlay)}
        onClick={onDismiss} />
      <div {...transformStyle({}, sx.content)}>
        <Menu {...props}
          {...transformStyle({}, sx.Menu)}
          children={children} />
      </div>
    </div>
  )
}

DropdownMenu.propTypes = {
  /** Toggles visibility of DropdownMenu */
  open: React.PropTypes.bool,
  /** Anchors menu to the right */
  right: React.PropTypes.bool,
  /** Anchors menu to the top */
  top: React.PropTypes.bool,
  /** Click event callback for the background overlay */
  onDismiss: React.PropTypes.func
}

DropdownMenu.defaultProps = {
  open: false,
  onDismiss: function () {}
}

DropdownMenu._name = 'DropdownMenu'

export default withRebass(DropdownMenu)

