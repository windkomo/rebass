
import React from 'react'
import createComponent from './create-component'

/**
 * Responsive media embed wrapper
 */

export const styles = {
  root: (theme, { ratio }) => ({
    position: 'relative',
    height: 0,
    padding: 0,
    paddingBottom: `${ratio * 100}%`,
    overflow: 'hidden'
  }),
  child: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    border: 0
  }
}

const Base = ({
  ratio = 9 / 16,
  ...props
}) => {
  const children = React.Children.map(props.children, (child) => {
    return React.cloneElement(child, {
      style: styles.child
    })
  })

  return (
    <div
      {...props}
      children={children}
    />
  )
}

const Embed = createComponent(Base, styles.root, {
  name: 'Embed',
  removeProps: [
    'ratio'
  ]
})

export default Embed

