
import createComponent from './createComponent'
// import withSpace from 'respace'

// Consider renaming
const createComponents = (config, theme, options = {}) => {
  const keys = Object.keys(config)
  const components = {}

  keys.forEach(key => {
    const { Tag, ...styles } = config[key]
    const component = createComponent(Tag)(styles, theme)
    components[key] = component
    // components[key] = options.spaceProps ? withSpace(theme)(component) : component
  })

  return components
}

export default createComponents

