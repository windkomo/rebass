
import React from 'react'
import createComponent from './create-component'

/**
 * Full-height banner with styling for background images
 */

export const styles = ({
  scale,
  typeScale,
  colors
}, {
  backgroundImage
}) => ({
  fontSize: typeScale[1],
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: scale[4],
  marginBottom: scale[3],
  color: colors.white,
  backgroundColor: colors.black,
  minHeight: '100vh',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundImage: backgroundImage ? `url(${backgroundImage})` : null,
})

const Banner = createComponent('div', styles, {
  name: 'Banner',
  removeProps: [
    'backgroundImage'
  ]
})

export default Banner

