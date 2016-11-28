
import React from 'react'
import withRebass from './withRebass'
import Label from './Label'
import Text from './Text'
import Arrow from './Arrow'

/**
 * Select form control with label
 */

const Select = ({
  label,
  name,
  options,
  message,
  hideLabel,
  horizontal,
  baseRef,
  children,
  theme,
  sx,
  ...props
}) => {
  const { scale, colors, borderColor, borderRadius } = theme

  const invalid = props['aria-invalid'] || props.invalid

  const styles = {
    root: {
      display: horizontal ? 'flex' : null,
      alignItems: horizontal ? 'baseline' : null,
      marginBottom: scale[2],
      color: invalid ? colors.error : null,
    },
    select: {
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
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: invalid ? colors.error : borderColor,
      borderRadius,
      MozAppearance: 'none',
      WebkitAppearance: 'none',
    },
    label: {
      paddingRight: horizontal ? scale[1] : null,
      minWidth: horizontal ? 96 : null,
    },
    wrapper: {
      position: 'relative',
      flex: horizontal ? '1 1 auto' : null,
    },
    arrow: {
      position: 'absolute',
      right: 0,
      top: 0,
      margin: scale[3] / 2,
      transform: 'translate(50%, -50%)',
    },
    message: {
      paddingLeft: horizontal ? scale[1] : null,
    }
  }

  const selectOptions = options.map((opt, i) => {
    return typeof opt === 'object'
      ? <option key={i} {...opt} />
      : <option key={i} children={opt} />
  })

  return (
    <div {...sx(styles.root)}>
      <Label
        {...sx(styles.label)}
        htmlFor={name}
        hide={hideLabel}
        children={label} />
      <div {...sx(styles.wrapper)}>
        <select
          {...props}
          {...sx(styles.select)}
          ref={baseRef}
          name={name}>
          {selectOptions}
        </select>
        <Arrow {...sx(styles.arrow)} />
      </div>
      {message && (
        <Text
          small
          {...sx(styles.message)}
          children={message} />
      )}
    </div>
  )
}

Select.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired,
  /** Options for select */
  options: React.PropTypes.array.isRequired,
  /** Adds a helper or error message below the select */
  message: React.PropTypes.string,
  /** Hides the form element label */
  hideLabel: React.PropTypes.bool,
  /** Displays label to the left */
  horizontal: React.PropTypes.bool,
  /** Adds a ref to the select element */
  baseRef: React.PropTypes.func
}

Select.defaultProps = {
  options: []
}

Select._name = 'Select'

export default withRebass(Select)

