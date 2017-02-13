
import chroma from 'chroma-js'

export const darken = hex => n => chroma(hex).darken(n).hex()
export const lighten = hex => n => chroma(hex).brighten(n).hex()

