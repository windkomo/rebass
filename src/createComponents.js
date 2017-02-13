
import createComponent from './createComponent'
import withSpace from 'respace'
import baseTheme from './base-theme'

// Consider renaming
const createComponents = (config, theme = {}, options = {}) => {
  const keys = Object.keys(config)
  const components = {}
  const { scale } = { ...baseTheme, ...theme }

  keys.forEach(key => {
    const { Tag, ...styles } = config[key]
    const component = createComponent(Tag)(styles, theme)
    components[key] = options.spaceProps ? withSpace(component, scale) : component
  })

  return components
}

export default createComponents

