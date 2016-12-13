
import React from 'react'
import createComponent from './create-component'
import Label from './Label'

/**
 * To do: update:
 * Styled custom radio input with label
 */

export const styles = {
  root: ({
    scale,
    colors
  }, { invalid }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: scale[1],
    color: invalid ? colors.red : null,
    cursor: 'pointer'
  }),
  input: {
    position: 'absolute',
    zIndex: -1,
    opacity: 0
  },
  dot: ({
    scale,
    colors,
  }, { checked }) => ({
    boxSizing: 'border-box',
    width: scale[2],
    height: scale[2],
    marginRight: scale[1],
    backgroundColor: checked ? colors.white : 'currentcolor',
    borderWidth: 5,
    borderStyle: checked ? 'solid' : null,
    borderColor: checked ? 'currentcolor' : null,
    borderRadius: 99999,
    opacity: checked ? null : 1 / 4,
    transition: 'border .1s ease-out',
    // color: backgroundColor || style.fill.backgroundColor
  })
}

const Root = createComponent('div', styles.root)
const Dot = createComponent('div', styles.dot)

const Input = createComponent((props) => (
  <input {...props} type='radio' />
), styles.input)

const Base = ({
  className,
  checked,
  children,
  ...props
}) => (
  <Label className={className}>
    <Input
      {...props}
      checked={checked} />
    <Dot checked={checked} />
    {children}
  </Label>
)

const Radio = createComponent(Base, styles.root, {
  name: 'Radio'
})

export default Radio

