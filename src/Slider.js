
import React from 'react'
import withRebass from './withRebass'
import Label from './Label'

/**
 * Stylized range input with label
 */

const Slider = ({
  label,
  name,
  fill,
  hideLabel,
  horizontal,
  baseRef,
  children,
  theme,
  sx,
  ...props
}) => {
  const { scale, colors } = theme

  const max = props.max || 100
  const min = props.min || 0
  const percent = (props.value - min) / (max - min) * 100

  const backgroundImage = fill ? `linear-gradient(90deg, currentcolor, currentcolor ${percent}%, transparent ${percent}%)` : null

  const height = 6

  const thumbStyles = {
    width: 24,
    height: 24,
    backgroundColor: 'currentcolor',
    border: 0,
    borderRadius: 9999,
    WebkitAppearance: 'none'
  }

  const styles = {
    root: {
      display: horizontal ? 'flex' : null,
      alignItems: horizontal ? 'center' : null,
      paddingBottom: scale[2],
    },
    label: {
      minWidth: horizontal ? 96 : null,
      paddingRight: horizontal ? scale[1] : null,
    },
    input: {
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      flex: horizontal ? '1 1 auto' : null,
      margin: 0,
      marginTop: scale[2] - height / 2,
      marginBottom: scale[2] - height / 2,
      cursor: 'pointer',
      color: color || 'inherit',
      backgroundColor: backgroundColor || colors.gray,
      backgroundImage,
      backgroundClip: 'content-box',
      height,
      borderRadius: 999,
      WebkitAppearance: 'none',
      appearance: 'none',
      '::-webkit-slider-thumb': {
        ...thumbStyles
      },
      '::-moz-range-thumb': {
        ...thumbStyles
      }
    }
  }

  return (
    <div {...sx(styles.root)}>
      <Label
        {...sx(styles.label)}
        htmlFor={name}
        hide={hideLabel}
        children={label} />
      <input
        {...props}
        ref={baseRef}
        type='range'
        name={name}
        {...sx(styles.input)}
      />
    </div>
  )
}

Slider.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired,
  /** Adds a fill color to the track - requires client-side JavaScript */
  fill: React.PropTypes.bool,
  /** Hides the form element label */
  hideLabel: React.PropTypes.bool,
  /** Displays label to the left */
  horizontal: React.PropTypes.bool,
  /** Adds a ref to the input element */
  baseRef: React.PropTypes.func
}

Slider._name = 'Slider'

export default withRebass(Slider)

