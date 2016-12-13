
import React from 'react'
import merge from 'deepmerge'
import _style from 'understyle'
import defaultTheme from './themes/basic'
import parseProps from './parse-props'

// To do: handle fill/theme colors prop???

let renders = 0

const getTheme = ({ rebass = {} }) => merge(rebass, defaultTheme, { clone: true })

const createComponent = (Comp, baseStyles, options = {}) => {
  const { name } = options

  class RebassComponent extends React.Component {
    constructor (props, context) {
      super()
      this.theme = getTheme(context)
      // To do:
      // - consider parseProps in constructor
    }

    render () {
      // const theme = getTheme(this.context)
      const props = parseProps(this.theme, this.props, baseStyles, options)
      // Render test
      // To do: optimize for static styling
      // + props based parser
      // console.log('render', renders++)

      return <Comp {...props} />
    }
  }

  RebassComponent.contextTypes = {
    rebass: React.PropTypes.object
  }

  return RebassComponent
}

export default createComponent

