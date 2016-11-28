
import React from 'react'
import withRebass from './withRebass'

const Circle = ({
  size = 32,
  theme,
  subStyles,
  transformStyle,
  ...props
}) => {
  const sx = {
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
      {...transformStyle(props, sx)}
    />
  )
}

Circle._name = 'Circle'

export default withRebass(Circle)

