
/**
 * A circular image for displaying user avatars
 */

import React from 'react'
import createComponent from './create-component'

export const styles = ({ colors }, {
  size = 48
}) => ({
  display: 'inline-block',
  maxWidth: 'none',
  width: size,
  height: size,
  backgroundColor: colors.gray4,
  borderRadius: 99999
})

const Avatar = createComponent('img', styles, {
  name: 'Avatar',
  removeProps: [
    'size'
  ]
})

export default Avatar

