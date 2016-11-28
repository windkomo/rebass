
import React from 'react'
import withRebass from './withRebass'
import Label from './Label'

/**
 * Checkbox input with label
 */

const Checkbox = ({
  label,
  name,
  checked,
  children,
  stacked,
  baseRef,
  theme,
  subStyles,
  transformStyle,
  ...props
}) => {
  const { scale, colors, borderRadius } = theme

  const invalid = props['aria-invalid'] || props.invalid

  const sx = {
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      flexDirection: stacked ? 'column' : null,
      paddingBottom: scale[1],
      color: invalid ? colors.error : null,
      cursor: 'pointer'
    },
    input: {
      position: 'absolute',
      zIndex: -1,
      opacity: 0,
      ...subStyles.input
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
      ...subStyles.box
    },
    icon: {
      display: checked ? null : 'none',
      width: '75%',
      height: '75%',
      marginTop: 1,
      fill: 'currentcolor',
      ...subStyles.icon
    }
  }

  return (
    <Label
      {...transformStyle(props, sx.root)}>
      <input
        {...props}
        ref={baseRef}
        name={name}
        type='checkbox'
        checked={checked}
        {...transformStyle({}, sx.input)} />
      <div {...transformStyle({}, sx.box)}>
        <svg
          viewBox='0 0 32 32'
          {...transformStyle({}, sx.icon)}>
          <path d='M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z' />
        </svg>
      </div>
      {label}
    </Label>
  )
}

Checkbox.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired,
  /** Place label centered under the radio */
  stacked: React.PropTypes.bool,
  /** Adds a ref to the input element */
  baseRef: React.PropTypes.func
}

Checkbox._name = 'Checkbox'

export default withRebass(Checkbox)

