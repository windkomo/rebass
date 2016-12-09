
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

styles.removeProps = [
  'size'
]

const Avatar = createComponent('img', styles, 'Avatar')

export default Avatar

