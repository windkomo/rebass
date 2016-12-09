
// To do:
// - [ ] Clean up functions and args

import cxs from 'cxs/monolithic'
import _style, { filterProps } from 'understyle'
import merge from 'deepmerge'
import classnames from 'classnames'

const parseStyleProps = (props, theme, removeProps) => {
  const { scale, colors, borderRadius } = theme
  const styles = _style(props, theme)
  const rest = clean(props, theme, removeProps)

  return { ...rest, styles }
}

const clean = (props, theme, removeProps) => {
  return Object.keys(props)
    .map(key => ({
      key,
      value: props[key]
    }))
    .filter(({ key }) => filterProps(theme)(key))
    .filter(({ key }) => removeProps.indexOf(key) < 0)
    .reduce((a, b) => {
      a[b.key] = b.value
      return a
    }, {})
}

const getCustomProps = ({ removeProps }) => removeProps || []

const parseProps = (name, theme, rawProps, baseStyles) => {
  const removeProps = getCustomProps(baseStyles || {})

  baseStyles = typeof baseStyles === 'function'
    ? baseStyles(theme, rawProps)
    : baseStyles

  const { styles, css = {}, ...props } = parseStyleProps(rawProps, theme, removeProps)

  const compTheme = theme[name] || {}
  const cxsClassName = cxs(merge.all([
    baseStyles,
    compTheme,
    styles,
    css
  ], { clone: true }))

  const className = classnames(name, cxsClassName, props.className)

  return { ...props, className }
}

export default parseProps

