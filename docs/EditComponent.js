
import React from 'react'
import Rebass, { createComponent } from 'rebass'

const { H3 } = Rebass

const EditComponent = ({
  name,
  Component,
  styles,
  onChange
}) => {
  const handleChange = (e) => {
    try {
      const obj = JSON.parse(e.target.value)
      onChange({ [name]: obj })
    } catch (e) {}
  }

  return (
    <div>
      <H3>{name}</H3>
      <textarea
        name={name}
        value={JSON.stringify(styles, null, 2)}
        onChange={handleChange}
      />
      <pre>{JSON.stringify(styles, null, 2)}</pre>
    </div>
  )
}

export default EditComponent

