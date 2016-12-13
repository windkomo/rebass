
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

export default Tabs

