
import assign from 'object-assign'
import classnames from 'classnames'
import cxs from 'cxs'

const defaultStyleTransform = (style, props = {}) => {
  const cx = cxs(style)
  const className = classnames(cx, props.className)

  return {
    className
  }
}

const createStyleTransform = (theme, props) => {
  const transformStyle = theme.transformStyle || defaultStyleTransform

  return (...args) => {
    const style = assign({}, ...args, props.style)
    return transformStyle(style, props)
  }
}

export default createStyleTransform

