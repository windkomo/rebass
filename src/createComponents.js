
import createComponent from './createComponent'

const createComponents = (config) => {
  const keys = Object.keys(config)
  const components = {}

  keys.forEach(key => {
    const { Tag, ...styles } = config[key]
    components[key] = createComponent(Tag)(styles)
  })

  return components
}

export default createComponents

