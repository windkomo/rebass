
import React from 'react'
import createComponent from './create-component'

/**
 * An off-canvas drawer component
 */

export const styles = {
  content: ({
    zIndex,
    scale,
    colors,
  }, { position, transform, size }) => {
    let width = 'auto'
    let height = 'auto'

    if (/(top|bottom)/.test(position)) {
      height = size
    } else {
      width = size
    }

    return {
      position: 'fixed',
      ...placements[position],
      zIndex: zIndex[4],
      width,
      height,
      padding: scale[2],
      transform,
      transition: 'transform .2s ease-out',
      overflowX: 'hidden',
      overflowY: 'scroll',
      color: colors.white,
      backgroundColor: colors.black
    }
  },
  dismiss: ({ zIndex }, { open }) => ({
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: zIndex[3],
    display: open ? null : 'none'
  })
}

const Dismiss = createComponent('div', styles.dismiss, {
  removeProps: [
    'open'
  ]
})

const Content = createComponent('div', styles.content, {
  removeProps: [
    'position'
  ]
})

const noop = () => {}

const Base = ({
  open,
  onDismiss = noop,
  position = 'left',
  size = 256,
  ...props
}) => {
  const transform = open ? null : transforms[position]

  return (
    <div>
      <Dismiss
        open={open}
        onClick={onDismiss}
      />
      <Content
        {...props}
        size={size}
        transform={transform}
        position={position}
      />
    </div>
  )
}

// To do: fix source order issues with createComponent
const Drawer = createComponent(Base, {}, {
  name: 'Drawer'
})

const placements = {
  top: {
    top: 0,
    right: 0,
    left: 0
  },
  right: {
    top: 0,
    right: 0,
    bottom: 0
  },
  bottom: {
    right: 0,
    bottom: 0,
    left: 0
  },
  left: {
    top: 0,
    bottom: 0,
    left: 0
  }
}

const transforms = {
  top: 'translateY(-100%)',
  right: 'translateX(100%)',
  bottom: 'translateY(100%)',
  left: 'translateX(-100%)'
}

export default Drawer

