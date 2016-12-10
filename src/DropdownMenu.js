
import React from 'react'
import createComponent from './create-component'
// To do:
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
  content: ({
    zIndex,
    scale,
    colors,
    borderRadius
  }) => ({
    position: 'relative',
    zIndex: zIndex[1],
    padding: scale[1],
    backgroundColor: colors.white,
    border: '1px solid',
    borderColor: colors.gray,
    borderRadius
  })
}

const Overlay = createComponent('div', styles.overlay)

const Content = createComponent('div', styles.content)

const noop = () => {}

const Base = ({
  open,
  onDismiss = noop,
  children,
  ...props
}) => (
  <div {...props}>
    <Overlay
      onClick={onDismiss}
      open={open} />
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

export default DropdownMenu

