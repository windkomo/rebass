
import React from 'react'
import getTheme from './util/get-theme'
import parseStyleProps from './util/parse-style-props'
import createStyleTransform from './util/create-style-transform'

const withRebass = (Comp) => {
  class RebassComponent extends React.Component {
    render () {
      const theme = getTheme(this.context)
      const props = parseStyleProps(Comp.displayName, theme, this.props)
      const sx = createStyleTransform(theme, props)

      return (
        <Comp
          {...props}
          theme={theme}
          sx={sx}
        />
      )
    }
  }

  RebassComponent.contextTypes = {
    rebass: React.PropTypes.object
  }

  RebassComponent.displayName = Comp.displayName

  return RebassComponent
}

export default withRebass

