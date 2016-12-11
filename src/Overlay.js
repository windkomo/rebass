
import React from 'react'
import createComponent from './create-component'

/**
 * Fixed positioned overlay for use with modal dialogs
 */

export const styles = {
  root: () => ({
  }),
  dismiss: () => ({
  }),
  inner: () => ({
  })
}

const Dismiss = createComponent('div', styles.dismiss)
const Inner = createComponent('div', styles.inner)

const Base = ({
  children,
  ...props
}) => (
  <div>
    <Dismiss onClick={onDismiss} />
    <Inner
      {...props}
      children={children} />
  </div>
)

const Overlay = createComponent(Base, styles.root, {
  name: 'Overlay'
})

/*
const Overlay = ({
  open,
  dark,
  fullWidth,
  box,
  onDismiss,
  children,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { zIndex, scale, colors, borderRadius } = theme

  const cx = classnames('Overlay', className)

  const innerStyle = {
    padding: scale[3],
    backgroundColor: colors.white,
    borderRadius,
    ...subComponentStyles.box
  }

  const sx = {
    root: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: zIndex[2],
      display: open ? 'flex' : 'none',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      ...subComponentStyles.background
    },
    dismiss: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: dark ? colors.black : colors.white,
      opacity: 0.875,
      ...subComponentStyles.dismiss
    },
    inner: {
      position: 'relative',
      zIndex: zIndex[1],
      minWidth: 320,
      width: fullWidth ? '100%' : null,
      ...style,
      ...(box ? innerStyle : {})
    }
  }

  return (
    <div
      className={cx}
      style={sx.root}>
      <div style={sx.dismiss}
        onClick={onDismiss} />
      <div
        {...props}
        style={sx.inner}
        children={children} />
    </div>
  )
}

Overlay.defaultProps = {
  open: false,
  dark: true,
  onDismiss: function () {}
}

Overlay._name = 'Overlay'

export default withRebass(Overlay)

*/
