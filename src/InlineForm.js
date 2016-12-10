
import React from 'react'
import createComponent from './create-component'
import Group from './Group'
import Label from './Label'
import Input from './Input'
import Button from './Button'

/**
 * Inline grouped form for search or other simple forms
 */

const noop = () => {}

const Base = ({
  name,
  label,
  value,
  placeholder,
  buttonLabel = 'Go',
  onChange = noop,
  onClick = noop,
  ...props
}) => (
  <form {...props}>
    <Label
      htmlFor={name}
      hide>
      {label}
    </Label>
    <Group>
      <Input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        rounded='left' />
      <Button
        type='submit'
        children={buttonLabel}
        onClick={onClick}
        rounded='right' />
    </Group>
  </form>
)

const InlineForm = createComponent(Base, null, {
  name: 'InlineForm'
})

export default InlineForm

