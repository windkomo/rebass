
import React from 'react'
import createComponent from './create-component'
import Label from './Label'

/**
 * Checkbox input with label
 */

export const styles = {
  root: ({
    scale,
    colors
  }, {
    invalid
  }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    // To do
    // flexDirection: stacked ? 'column' : null,
    paddingBottom: scale[1],
    color: invalid ? colors.red : null,
    cursor: 'pointer'
  }),
  input: {
    position: 'absolute',
    zIndex: -1,
    opacity: 0,
  },
  box: ({
    scale,
    colors,
    borderRadius
  }, { checked }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale[2],
    height: scale[2],
    marginRight: scale[1],
    // To do:
    // marginRight: stacked ? null : scale[1],
    // marginBottom: stacked ? scale[1] : null,
    borderRadius,
    border: '2px solid',
    transition: 'background-color .1s ease-out',
    ...(checked ? {
      color: colors.white,
      backgroundColor: colors.green,
      borderColor: colors.green
    } : {
      borderColor: colors.gray
    })
  }),
  icon: (theme, { checked }) => ({
    display: checked ? null : 'none',
    width: '75%',
    height: '75%',
    marginTop: 1,
    fill: 'currentcolor'
  })
}

const Input = createComponent('input', styles.input)

const Box = createComponent('div', styles.box)

const IconBase = (props) => {
  return (
    <svg {...props} viewBox='0 0 32 32'>
      <path d='M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z' />
    </svg>
  )
}

const Icon = createComponent(IconBase, styles.icon)

const Base = ({
  children,
  ...props
}) => {
  // To do: split style and input props
  return (
    <Label>
      <Input
        {...props}
        type='checkbox'
      />
      <Box checked={props.checked}>
        <Icon checked={props.checked} />
      </Box>
      {children}
    </Label>
  )
}

const Checkbox = createComponent(Base, styles.root, {
  name: 'Checkbox'
})

export default Checkbox

/*
const Checkbox = ({
  label,
  name,
  checked,
  children,
  stacked,
  baseRef,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale, colors, borderRadius } = theme

  const invalid = props['aria-invalid'] || props.invalid

  const {
    color,
    backgroundColor,
    ...rootStyle
  } = style

  const sx = {
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      flexDirection: stacked ? 'column' : null,
      paddingBottom: scale[1],
      color: invalid ? colors.error : null,
      cursor: 'pointer',
      ...rootStyle
    },
    input: {
      position: 'absolute',
      zIndex: -1,
      opacity: 0,
      ...subComponentStyles.input
    },
    box: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: scale[2],
      height: scale[2],
      marginRight: stacked ? null : scale[1],
      marginBottom: stacked ? scale[1] : null,
      ...(checked ? {
        color: color || style.fill.color || colors.white,
        backgroundColor: backgroundColor || style.fill.backgroundColor || colors.success,
        borderColor: backgroundColor || style.fill.borderColor || colors.success
      } : {
        borderColor: theme.borderColor
      }),
      borderRadius,
      borderStyle: 'solid',
      borderWidth: 2,
      transition: 'background-color .1s ease-out',
      ...subComponentStyles.box
    },
    icon: {
      display: checked ? null : 'none',
      width: '75%',
      height: '75%',
      marginTop: 1,
      fill: 'currentcolor',
      ...subComponentStyles.icon
    }
  }

  const cx = classnames('Checkbox', className, {
    'isInvalid': invalid,
    'isDisabled': props.disabled,
    'isReadonly': props.readOnly
  })

  return (
    <Label
      className={cx}
      style={sx.root}>
      <input
        {...props}
        ref={baseRef}
        name={name}
        type='checkbox'
        checked={checked}
        style={sx.input} />
      <div
        className='Checkbox_box'
        style={sx.box}>
        <svg
          viewBox='0 0 32 32'
          style={sx.icon}>
          <path d='M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z' />
        </svg>
      </div>
      {label}
    </Label>
  )
}


Checkbox._name = 'Checkbox'

export default withRebass(Checkbox)

*/
