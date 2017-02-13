
import config from './base-config'
import createComponents from './createComponents'

const components = createComponents(config, null, {
  spaceProps: true
})

// Manually export each??
// const { Button } = components
// export { Button, }

export default components

