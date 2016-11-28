
import React from 'react'
import withRebass from './withRebass'

const Circle = ({
  size = 32,
  theme,
  sx,
  ...props
}) => {
  const style = {
    display: 'inline-block',
    width: size,
    height: size,
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: size + 'px',
    overflow: 'hidden',
    border: '1px solid',
    borderRadius: 99999,
  }

  return (
    <div
      {...props}
      {...sx(style)}
    />
  )
}

Circle._name = 'Circle'

export default withRebass(Circle)

