
import React from 'react'
import createComponent from './create-component'

// To do: WIP
// To do:

export const styles = ({ colors }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  borderBottom: '1px solid',
  borderColor: colors.gray,
})

const Tabs = createComponent('div', styles, {
  name: 'Tabs',
  removeProps: [
    'active'
  ]
})

export const Tabs

/*
const Tabs = ({
  children,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { borderColor } = theme

  const cx = classnames('Tabs', className)

  const sx = {
    display: 'flex',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: borderColor,
    ...style
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx}>
      {children}
    </div>
  )
}

Tabs._name = 'Tabs'

export default withRebass(Tabs)
*/
