
import React from 'react'
import merge from 'deepmerge'
import _style from 'understyle'
import defaultTheme from './themes/basic'
import parseProps from './parse-props'

// To do: handle fill/theme colors prop???

const getTheme = ({ rebass = {} }) => merge(rebass, defaultTheme, { clone: true })

const createComponent = (Comp, baseStyles, options = {}) => {
  const { name } = options

  class RebassComponent extends React.Component {
    render () {
      const theme = getTheme(this.context)
      const props = parseProps(theme, this.props, baseStyles, options)

      return <Comp {...props} />
    }
  }

  RebassComponent.contextTypes = {
    rebass: React.PropTypes.object
  }

  return RebassComponent
}

export default createComponent

