
import React from 'react'
import createComponent from './create-component'

/**
 * Code element for inline code snippets
 */

export const styles = ({
  typeScale,
  monospace
}) => ({
  fontFamily: monospace,
  fontSize: typeScale[5]
})

const Code = createComponent('code', styles, {
  name: 'Code'
})

export default Code

