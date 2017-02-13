
import {
  scale,
  typeScale,
  bold,
  colors,
  radius,
} from './base-theme'
import { darken } from './util'

const headingStyles = {
  fontWeight: bold,
  lineHeight: 1.25,
  margin: 0
}

const darkblue = darken(colors.blue)(1/4)

const baseConfig = {
  Button: {
    Tag: 'button',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: bold,
    margin: 0,
    padding: scale[1],
    color: colors.white,
    backgroundColor: colors.blue,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: radius,
    WebkitAppearance: 'none',
    appearance: 'none',
    ':hover': {
      backgroundColor: darkblue
    },
    ':focus': {
    },
    ':active': {
    }
  },
  H1: {
    Tag: 'h1',
    fontSize: typeScale[1],
    ...headingStyles
  },
  H2: {
    Tag: 'h2',
    fontSize: typeScale[2],
    ...headingStyles
  }
}

export default baseConfig

