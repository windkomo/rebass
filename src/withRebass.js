
import React from 'react'
import parseStyleProps from './util/parse-style-props'
import createStyleTransform from './util/create-style-transform'

const withRebass = Comp => {
  class RebassBase extends React.Component {
    render () {
      const { rebass } = this.context
      const props = parseStyleProps(this.props, this.context, Comp._name)
      const transformStyle = createStyleTransform(rebass)

      return (
        <Comp
          {...props}
          transformStyle={transformStyle}
        />
      )
    }
  }

  RebassBase.contextTypes = {
    rebass: React.PropTypes.object
  }

  RebassBase.propTypes = {
    /** Sets foreground color */
    color: React.PropTypes.string,
    /** Sets background color */
    backgroundColor: React.PropTypes.string,
    /** Sets semantic color themes */
    theme: React.PropTypes.oneOf([
      'primary',
      'secondary',
      'default',
      'info',
      'success',
      'warning',
      'error',
      'muted'
    ])
  }

  RebassBase.displayName = Comp._name

  return RebassBase
}

export default withRebass

