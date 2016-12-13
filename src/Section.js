
import React from 'react'
import createComponent from './create-component'

/**
 * Section element with vertical padding
 */

export const styles = ({ scale }) => ({
  paddingTop: scale[4],
  paddingBottom: scale[4]
})

const Section = createComponent('section', styles, {
  name: 'Section'
})

export default Section

