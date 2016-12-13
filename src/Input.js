
import React from 'react'
import createComponent from './create-component'

/**
 * To do: rewrite description for form components
 *
 * Input element with label with support for aria-invalid, disabled, and readOnly HTML attributes
 */

export const styles = ({
  scale,
  colors,
  borderRadius
}, {
  invalid
}) => ({
  fontFamily: 'inherit',
  fontSize: 'inherit',
  lineHeight: 1.5,
  display: 'block',
  width: '100%',
  margin: 0,
  paddingTop: scale[1],
  paddingBottom: scale[1],
  paddingLeft: scale[1],
  paddingRight: scale[1],
  color: 'inherit',
  backgroundColor: 'transparent',
  border: '1px solid',
  borderColor: invalid ? colors.red : colors.gray,
  borderRadius,
  boxShadow: 'none',
  WebkitAppearance: 'none',
  appearance: 'none',
  ':focus': {
    outline: 'none',
    borderColor: colors.blue,
    // To do: Add alpha colors/functions
    boxShadow: `0 0 0 2px ${colors.blue}`
  }
})

const Base = (props) => (
  <input type='text' {...props} />
)

const Input = createComponent(Base, styles, {
  name: 'Input'
})

export default Input

