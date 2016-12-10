
import React from 'react'
import createComponent from './create-component'

/**
 * A button with an × for close and dismiss actions
 */

export const styles = ({
  bold
}) => ({
  fontSize: '1.5em',
  lineHeight: 1,
  fontWeight: bold,
  margin: 0,
  padding: 0,
  cursor: 'pointer',
  color: 'inherit',
  backgroundColor: 'transparent',
  border: 0,
  WebkitAppearance: 'none'
})

const CloseBase = createComponent('button', styles, {
  name: 'Close'
})

const Close = (props) => (
  <CloseBase
    {...props}
    title='Close'
    children='×'
  />
)

export default Close

