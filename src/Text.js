
import React from 'react'
import createComponent from './create-component'

/**
 * Component for displaying text in UI
 */

export const styles = {
  margin: 0
}

const Text = createComponent('p', styles, {
  name: 'Text'
})

export default Text

