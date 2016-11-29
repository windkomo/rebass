
import React from 'react'
import withRebass from './withRebass'
import Label from './Label'
import Text from './Text'

/**
 * Input element with label with support for aria-invalid, disabled, and readOnly HTML attributes
 */

const Input = ({
  label,
  name,
  type,
  message,
  hideLabel,
  horizontal,
  children,
  autoOff,
  baseRef,
  ref,
  theme,
  sx,
  ...props
}) => {
  const { scale, colors, borderColor } = theme

  const invalid = props.invalid || props['aria-invalid']

  const styles = {
    root: {
      display: horizontal ? 'flex' : null,
      alignItems: horizontal ? 'baseline' : null,
      marginBottom: scale[2],
      color: invalid ? colors.error : null,
    },
    label: {
      minWidth: horizontal ? 96 : null,
      paddingRight: horizontal ? scale[1] : null,
    },
    input: {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      boxSizing: 'border-box',
      display: 'block',
      flex: horizontal ? '1 1 auto' : null,
      width: '100%',
      height: scale[3],
      margin: 0,
      paddingLeft: scale[1],
      paddingRight: scale[1],
      color: 'inherit', // color || 'inherit',
      backgroundColor: colors.lighten, // backgroundColor || colors.lighten,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: invalid ? colors.error : borderColor,
      borderRadius: 8,
      boxShadow: 'none',
      WebkitAppearance: 'none',
      appearance: 'none',
    },
    message: {
      paddingLeft: horizontal ? scale[1] : null,
    }
  }

  const autoProps = autoOff ? {
    autoComplete: 'off',
    autoCorrect: 'off',
    autoCapitalize: 'off',
    spellCheck: 'off'
  } : {}

  return (
    <div {...sx(styles.root)}>
      <Label
        {...sx(styles.label)}
        htmlFor={name}
        hide={hideLabel}
        children={label} />
      <input
        {...props}
        {...autoProps}
        {...sx(styles.input)}
        ref={baseRef}
        type={type}
        name={name}
      />
      {message && (
        <Text
          {...sx(styles.message)}
          small
          children={message}
        />
      )}
    </div>
  )
}

Input.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired,
  /** Form element type */
  type: React.PropTypes.string,
  /** Adds a helper or error message below the input */
  message: React.PropTypes.string,
  /** Hides the form element label */
  hideLabel: React.PropTypes.bool,
  /** Displays label to the left */
  horizontal: React.PropTypes.bool,
  /** Disables autocomplete, autocorrect, autocapitalize, and spellcheck props */
  autoOff: React.PropTypes.bool,
  /** Adds a ref to the input element */
  baseRef: React.PropTypes.func
}

Input.defaultProps = {
  type: 'text'
}

Input._name = 'Input'

export default withRebass(Input)

