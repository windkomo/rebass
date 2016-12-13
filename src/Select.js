
import React from 'react'
import createComponent from './create-component'
import Arrow from './Arrow'

/**
 * Select form control with label
 */

export const styles = {
  root: ({
    colors,
    borderRadius
  }, { invalid }) => ({
    position: 'relative',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: invalid ? colors.red : colors.gray,
    borderRadius
  }),
  select: ({
    scale,
    colors,
    borderRadius
  }) => ({
    fontFamily: 'inherit',
    fontSize: 'inherit',
    boxSizing: 'border-box',
    display: 'block',
    width: '100%',
    paddingLeft: scale[1],
    paddingRight: scale[3],
    height: scale[3],
    color: 'inherit',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    border: 0,
    borderRadius,
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    appearance: 'none',
    ':focus': {
      // To do:
    }
  }),
  arrow: ({ scale }) => ({
    position: 'absolute',
    right: 0,
    top: 0,
    margin: scale[3] / 2,
    transform: 'translate(50%, -50%)'
  })
}

const parseOption = (option) => (typeof option === 'string' || typeof option === 'number')
  ? <option value={option}>{option}</option>
  : option

const SelectBase = createComponent(({
  options,
  children,
  ...props
}) => {
  const chx = Array.isArray(options)
    ? options.map(parseOption)
    : children
  return (
    <select
      {...props}
      children={chx} />
  )
}, styles.select)

const ArrowStyled = createComponent(Arrow, styles.arrow)

const Base = ({
  className,
  ...props
}) => (
  <div className={className}>
    <SelectBase {...props} />
    <ArrowStyled />
  </div>
)

const Select = createComponent(Base, styles.root, {
  name: 'Select',
  removeProps: [
    'invalid'
  ]
})

export default Select

