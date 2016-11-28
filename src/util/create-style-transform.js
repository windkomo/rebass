
import assign from 'object-assign'
import classnames from 'classnames'
import cxs from 'cxs'

const defaultStyleTransform = (style, props = {}) => {
  console.log('props', props)
  const sx = assign({}, style)
  const cx = cxs(sx)
  const className = classnames(cx, props.className)

  return {
    className
  }
}

const createStyleTransform = (theme, props) => {
  const transformStyle = theme.transformStyle || defaultStyleTransform

  return (...args) => {
    const style = assign({}, ...args)
    return transformStyle(style, props)
  }
}

export default createStyleTransform

