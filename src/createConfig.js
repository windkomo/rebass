
import baseTheme from './base-theme'
import { darken } from './util'

const createConfig = (options) => {
  const theme = { ...baseTheme, ...options }
  const {
    scale,
    typeScale,
    bold,
    colors,
    radius,
  } = theme

  const headingStyles = {
    fontWeight: bold,
    lineHeight: 1.25,
    margin: 0
  }

  const darkblue = darken(colors.blue)(1/4)

  const H1 = {
    Tag: 'h1',
    fontSize: typeScale[1],
    ...headingStyles
  }

  const H2 = {
    Tag: 'h2',
    fontSize: typeScale[2],
    ...headingStyles
  }

  const H3 = {
    Tag: 'h3',
    fontSize: typeScale[3],
    ...headingStyles
  }

  const H4 = {
    Tag: 'h4',
    fontSize: typeScale[4],
    ...headingStyles
  }

  const H5 = {
    Tag: 'h5',
    fontSize: typeScale[5],
    ...headingStyles
  }

  const H6 = {
    Tag: 'h6',
    fontSize: typeScale[6],
    ...headingStyles
  }

  const Image = {
    Tag: 'img',
    maxWidth: '100%',
    height: 'auto'
  }

  const Avatar = {
    Tag: 'img',
    width: 48,
    height: 48,
    borderRadius: 99999,
    backgroundColor: colors.gray
  }

  const Badge = {
    fontSize: typeScale[6],
    fontWeight: bold,
    display: 'inline-flex',
    alignItems: 'center',
    height: scale[2],
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: scale[1],
    paddingRight: scale[1],
    borderRadius: radius,
    color: colors.white,
    backgroundColor: colors.blue
  }

  const Banner = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: scale[3],
    minHeight: '100vh',
    color: colors.white,
    backgroundColor: colors.blue,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }

  const Blockquote = {
    Tag: 'blockquote',
    fontSize: typeScale[3],
    fontStyle: 'italic',
    margin: 0,
    marginBottom: scale[2]
  }

  const Button = {
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
  }

  // const ButtonOutline = {}

  const config = {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,

    Image,
    Avatar,
    Badge,
    Banner,
    Blockquote,

    Button,
    // ButtonOutline,
  }

  return config
}

export default createConfig

