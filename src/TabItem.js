
import React from 'react'
import createComponent from './create-component'

export const styles = ({
  typeScale,
  bold,
  scale,
  colors
}, { active }) => ({
  fontSize: typeScale[5],
  fontWeight: bold,
  paddingTop: scale[1],
  paddingBottom: scale[1],
  marginRight: scale[2],
  textDecoration: 'none',
  borderBottom: '2px solid transparent',
  cursor: 'pointer',
  // To do: consider data attributes for custom styling
  ...(active ? {
    color: colors.blue,
    borderColor: colors.blue,
  } : {})
})

const TabItem = createComponent('a', styles, {
  name: 'TabItem'
})

export default TabItem

