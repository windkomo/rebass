
import createComponent from './createComponent'

const createComponents = (config, theme) => {
  const keys = Object.keys(config)
  const components = {}

  keys.forEach(key => {
    const { Tag, ...styles } = config[key]
    components[key] = createComponent(Tag)(styles, theme)
  })

  return components
}

export default createComponents

