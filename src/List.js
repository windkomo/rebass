
import React from 'react'
import createComponent from './create-component'

/** List component that accepts any child component item types */

export const styles = ({
  scale
}, {
  reset,
  flush
}) => ({
  margin: 0,
  paddingLeft: (flush || reset) ? 0 : scale[2],
  listStyle: reset ? 'none' : null
})

const wrapChildren = (children) => (
  React.Children.map(children, child => (
    child.type === 'li'
      ? child
      : <li>{child}</li>
  ))
)

const Base = ({
  ordered,
  ...props
}) => {
  const Comp = ordered ? 'ol' : 'ul'
  const children = wrapChildren(props.children)

  return (
    <Comp
      {...props}
      children={children}
    />
  )
}

const List = createComponent(Base, styles, {
  name: 'List'
})

export default List

