
import React from 'react'
import withRebass from './withRebass'
import Input from './Input'
import ButtonOutline from './ButtonOutline'

/**
 * Inline grouped form for search or other simple forms
 */

const InlineForm = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  buttonLabel,
  onClick,
  theme,
  sx,
  ...props
}) => {
  const style = {
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    input: {
      flex: '1 1 auto',
    },
    button: {
      marginLeft: -1,
    }
  }

  return (
    <form
      {...props}
      {...sx(styles.root)}>
      <Input
        {...sx(styles.input)}
        name={name}
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        mb={0}
        hideLabel
        rounded='left' />
      <ButtonOutline
        {...sx(styles.button)}
        type='submit'
        children={buttonLabel}
        onClick={onClick}
        rounded='right' />
    </form>
  )
}

InlineForm.propTypes = {
  /** Input label */
  label: React.PropTypes.string.isRequired,
  /** Input name */
  name: React.PropTypes.string.isRequired,
  /** Input value */
  value: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  /** Input placeholder */
  placeholder: React.PropTypes.string,
  /** onChange handler for input */
  onChange: React.PropTypes.func,
  /** Text for button */
  buttonLabel: React.PropTypes.string,
  /** onClick handler for button */
  onClick: React.PropTypes.func
}

InlineForm.defaultProps = {
  buttonLabel: 'Go',
  onClick: () => {},
  onChange: () => {}
}

InlineForm._name = 'InlineForm'

export default withRebass(InlineForm)

