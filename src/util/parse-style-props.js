
import assign from 'object-assign'
import { setScale as createMargin } from 'understyle/dist/margin'
import { setScale as createPadding } from 'understyle/dist/padding'
import getTypographicStyle from './get-typographic-style'
import radii from './radii'
import colorStyle from './color-style'

const parseStyleProps = (displayName, theme, {
  bold,
  center,
  caps,
  p, pt, pr, pb, pl, px, py,
  m, mt, mr, mb, ml, mx, my,
  rounded,
  pill,
  circle,
  color,
  backgroundColor,
  css = {}, // is this needed?
  ...props
}) => {
  const { scale, colors, borderRadius } = theme

  const compTheme = theme[displayName] || {}

  const margin = createMargin(scale)
  const padding = createPadding(scale)
  const radiusStyles = radii(borderRadius)
  const colorStyles = colorStyle(colors)

  const style = assign(
    {
      boxSizing: 'border-box',
    },
    compTheme,
    getTypographicStyle(theme)({ bold, center, caps }),
    margin({ m, mt, mr, mb, ml, mx, my }),
    padding({ p, pt, pr, pb, pl, px, py }),
    colorStyles({
      color,
      backgroundColor
    }),
    radiusStyles({
      rounded,
      pill,
      circle
    }),
    css
  )

  return {
    ...props,
    style
  }
}

export default parseStyleProps

