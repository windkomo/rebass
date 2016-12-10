
import React from 'react'
import createComponent from './create-component'
// import Menu from './Menu'

/**
 * Absolutely positioned Menu component for use within Dropdown component
 */

export const styles = {
  root: ({ zIndex }, { open, top, right }) => ({
    display: open ? null : 'none',
    position: 'absolute',
    left: right ? 'auto' : 0,
    right: right ? 0 : 'auto',
    top: top ? 'auto' : '100%',
    bottom: top ? '100%' : 'auto',
    zIndex: zIndex[4]
  }),
  overlay: (theme, { open }) => ({
    position: 'fixed',
    display: open ? null : 'none',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  }),
  content: ({ zIndex }) => ({
    position: 'relative',
    zIndex: zIndex[1]
  })
}

const Overlay = createComponent('div', styles.overlay)

const Content = createComponent('div', styles.content)

const Base = ({
  open,
  children,
  ...props
}) => (
  <div {...props}>
    <Overlay open={open} />
    <Content open={open}>
      {children}
    </Content>
  </div>
)

const DropdownMenu = createComponent(Base, styles.root, {
  name: 'DropdownMenu',
  removeProps: [
  ]
})

/*
const DropdownMenu = ({
  open,
  right,
  top,
  children,
  onDismiss,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { zIndex } = theme

  const cx = classnames('DropdownMenu', className)

  const sx = {
    root: {
      display: open ? null : 'none',
      position: 'absolute',
      left: right ? 'auto' : 0,
      right: right ? 0 : 'auto',
      top: top ? 'auto' : '100%',
      bottom: top ? '100%' : 'auto',
      zIndex: 4,
      ...style
    },
    overlay: {
      position: 'fixed',
      display: open ? null : 'none',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...subComponentStyles.overlay
    },
    content: {
      position: 'relative',
      zIndex: zIndex[1],
      ...subComponentStyles.content
    },
    Menu: {
      ...subComponentStyles.Menu
    }
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx.root}>
      <div
        style={sx.overlay}
        onClick={onDismiss} />
      <div style={sx.content}>
        <Menu {...props}
          style={sx.Menu}
          children={children} />
      </div>
    </div>
  )
}

DropdownMenu.defaultProps = {
  open: false,
  onDismiss: function () {}
}

DropdownMenu._name = 'DropdownMenu'

export default withRebass(DropdownMenu)
*/

