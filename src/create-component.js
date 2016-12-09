
import React from 'react'
import merge from 'deepmerge'
import _style from 'understyle'
import defaultTheme from './themes/basic'
import parseProps from './parse-props'

const getTheme = ({ rebass = {} }) => merge(rebass, defaultTheme, { clone: true })

// To do:
// - [ ] Add removeProps option

const createComponent = (Comp, styles, name) => {
  class RebassComponent extends React.Component {
    render () {
      const theme = getTheme(this.context)
      const props = parseProps(name, theme, this.props, styles)

      return <Comp {...props} />
    }
  }

  RebassComponent.contextTypes = {
    rebass: React.PropTypes.object
  }

  return RebassComponent
}

export default createComponent

