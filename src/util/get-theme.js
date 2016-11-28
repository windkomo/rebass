
import assign from 'object-assign'
import basic from '../themes/basic'

const getTheme = (context = {}) => {
  const { rebass } = context

  return assign({}, basic, rebass)
}

export default getTheme

