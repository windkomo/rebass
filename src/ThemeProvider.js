
import React from 'react'

class ThemeProvider extends React.Component {
  getChildContext () {
    return {
      rebass: this.props.theme
    }
  }

  render () {
    const { theme, ...props } = this.props

    return (
      <div {...props} />
    )
  }
}

ThemeProvider.defaultProps = {
  theme: {}
}

ThemeProvider.propTypes = {
  theme: React.PropTypes.object
}

ThemeProvider.childContextTypes = {
  rebass: React.PropTypes.object
}

export default ThemeProvider

