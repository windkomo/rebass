
import assign from 'object-assign'
import classnames from 'classnames'
import cxs from 'cxs'

const defaultStyleTransform = (props, style) => {
  const sx = assign({}, style, props.css)
  const cx = cxs(sx)
  const className = classnames(cx, props.className)

  return {
    className
  }
}

const createStyleTransform = (config = {}) => {
  const transformStyle = config.transformStyle || defaultStyleTransform
  return (props, ...args) => {
    const styles = assign({}, ...args)
    return transformStyle(props, styles)
  }
}

export default createStyleTransform

