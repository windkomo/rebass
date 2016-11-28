
import { setScale as createMargin } from 'understyle/dist/margin'
import { setScale as createPadding } from 'understyle/dist/padding'
import getTypographicStyle from './get-typographic-style'
import radii from './radii'
import colorStyle from './color-style'
import getColorFill from './get-color-fill'
import getSubStyles from './get-sub-styles'
import basicTheme from '../themes/basic'

const parseStyleProps = ({
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
  css = {},
  // theme,
  ...props
}, context = {}, compName) => {
  const { rebass } = context

  const theme = { ...basicTheme, ...rebass }
  const { scale, colors, borderRadius } = theme

  const themeStyle = theme[compName] || {}

  const margin = createMargin(scale)
  const padding = createPadding(scale)
  const radiusStyles = radii(borderRadius)
  const colorStyles = colorStyle(colors)

  const subStyles = getSubStyles(themeStyle, css)

  const style = {
    boxSizing: 'border-box',
    ...themeStyle,
    ...getTypographicStyle(theme)({ bold, center, caps }),
    ...margin({ m, mt, mr, mb, ml, mx, my }),
    ...padding({ p, pt, pr, pb, pl, px, py }),
    ...colorStyles({
      color,
      backgroundColor
    }),
    ...radiusStyles({
      rounded,
      pill,
      circle
    }),
    // Rename this shit
    // fill: theme ? getColorFill(colors)(theme) : {}
  }

  return {
    ...props,
    // css,
    theme,
    style,
    subStyles
  }
}

export default parseStyleProps

