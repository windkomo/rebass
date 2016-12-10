
import React from 'react'
import createComponent from './create-component'

/**
 * Styled box with border
 */

export const styles = ({
  scale,
  borderRadius,
  colors
}) => ({
  padding: scale[1],
  marginBottom: scale[2],
  border: '1px solid',
  borderColor: colors.gray,
  borderRadius,
  overflow: 'hidden'
})

const Card = createComponent('div', styles, {
  name: 'Card',
  removeProps: [
    'width'
  ]
})

export default Card

