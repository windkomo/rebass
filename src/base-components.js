
import config from './base-config'
import createComponents from './createComponents'

const components = createComponents(config, null, {
  spaceProps: true
})

export default components

