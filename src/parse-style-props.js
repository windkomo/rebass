
import cxs from 'cxs/monolithic'
import classnames from 'classnames'

// To do: handle theme
// consider just using inline styles - doesn't allow for responsive m/p

const STYLE_PROPS = /^[mp][trblxy]?$/

const parseStyleProps = (theme) => (original = {}, cx) => {
  const props = {}
  Object.keys(original)
    .forEach(key => {
      if (STYLE_PROPS.test(key)) return
      props[key] = original[key]
    })

  const propStyles = getPropStyles(original, theme)
  const propscx = cxs(propStyles)
  const className = classnames(original.className, cx, propscx)

  return { ...props, className }
}

const getPropStyles = (props, theme) => {
  const arr = Object.keys(props).map(key => ({ key, value: props[key] }))
  const styles = arr.map(createStyle(theme))
    .filter(s => s !== null)
    .reduce((a, b) => ({ ...a, ...b}), {})

  return styles
}

const createStyle = (theme) => ({ key, value }) => {
  switch (key) {
    case 'p':
    case 'padding':
      return getScaleStyle(theme.scale)('padding', value)
    case 'pt':
    case 'paddingTop':
      return getScaleStyle(theme.scale)('paddingTop', value)
    case 'pr':
    case 'paddingRight':
      return getScaleStyle(theme.scale)('paddingRight', value)
    case 'pb':
    case 'paddingBottom':
      return getScaleStyle(theme.scale)('paddingBottom', value)
    case 'pl':
    case 'paddingLeft':
      return getScaleStyle(theme.scale)('paddingLeft', value)
    case 'px':
    case 'paddingX':
      return {
        ...getScaleStyle(theme.scale)('paddingLeft', value),
        ...getScaleStyle(theme.scale)('paddingRight', value)
      }
    case 'py':
    case 'paddingY':
      return {
        ...getScaleStyle(theme.scale)('paddingTop', value),
        ...getScaleStyle(theme.scale)('paddingBottom', value)
      }

    case 'm':
    case 'margin':
      return getScaleStyle(theme.scale)('margin', value)
    case 'mt':
    case 'marginTop':
      return getScaleStyle(theme.scale)('marginTop', value)
    case 'mr':
    case 'marginRight':
      return getScaleStyle(theme.scale)('marginRight', value)
    case 'mb':
    case 'marginBottom':
      return getScaleStyle(theme.scale)('marginBottom', value)
    case 'ml':
    case 'marginLeft':
      return getScaleStyle(theme.scale)('marginLeft', value)
    case 'mx':
    case 'marginX':
      return {
        ...getScaleStyle(theme.scale)('marginLeft', value),
        ...getScaleStyle(theme.scale)('marginRight', value)
      }
    case 'my':
    case 'marginY':
      return {
        ...getScaleStyle(theme.scale)('marginTop', value),
        ...getScaleStyle(theme.scale)('marginBottom', value)
      }

    default:
      return null
  }
}

const getScaleStyle = (scale) => (key, value) => {
  if (value === null) return null
  if (typeof value === 'string') {
    return { [key]: value }
  }

  const multiplier = value < 0 ? -1 : 1
  const absVal = Math.abs(value)
  const n = (scale[absVal] || absVal) * multiplier
  return { [key]: n }
}

export default parseStyleProps

