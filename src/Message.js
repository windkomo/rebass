
import React from 'react'
import createComponent from './create-component'

/** Component for displaying flash and error messages */

export const styles = ({
  scale,
  bold,
  colors,
  borderRadius
}) => ({
  fontWeight: bold,
  display: 'flex',
  alignItems: 'center',
  padding: scale[2],
  marginBottom: scale[2],
  borderRadius,
  color: colors.white,
  backgroundColor: colors.blue
})

const Message = createComponent('div', styles, {
  name: 'Message'
})

export default Message

