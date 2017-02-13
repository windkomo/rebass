
import React from 'react'
import { createView } from 'rrx'
import Rebass, {
  createComponents,
  baseTheme,
  baseConfig,
  Button
} from 'rebass'
import EditComponent from './EditComponent'

const { H2, H3 } = Rebass

class StyleGuide extends React.Component {
  constructor () {
    super()
    this.state = {
      theme: baseTheme,
      config: baseConfig
    }
    this.update = (next) => {
      this.setState(next)
    }
    // on component change
    this.onChange = (styles) => {
      const { config } = this.state
      const next = { ...config, ...styles }
      this.update({ config: next })
    }
  }

  render () {
    const { config } = this.state
    const keys = Object.keys(config)
    const components = createComponents(config)

    return (
      <div>
        <H2>Style Guide</H2>
        <div>
          {keys.map(key => (
            <EditComponent
              key={key}
              name={key}
              Component={components[key]}
              styles={config[key]}
              onChange={this.onChange}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default createView(StyleGuide)

