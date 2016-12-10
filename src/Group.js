
import React from 'react'
import createComponent from './create-component'
import {
  Button,
  ButtonOutline,
  Input,
  Select
} from './index'

/**
 * Wrapper component to control border radii and alignment of child button components
 */

export const styles = {
  display: 'flex',
  alignItems: 'center'
}

const Base = (props) => {
  const children = styleChildren(props.children)
  return <div {...props} children={children} />
}

const Group = createComponent(Base, styles, {
  name: 'Group'
})

const styleChildren = (children) => {
  return React.Children.map(children, (child, i) => {
    const childProps = {}

    if (child.type === Button ||
        child.type === ButtonOutline ||
        child.type === Input ||
        child.type === Select) {
      childProps.rounded = i === 0
        ? 'left'
        : i === children.length - 1
        ? 'right'
        : false
    }

    if (child.type === Input || child.type === Select) {
      childProps.mb = 0
    }

    if (child.type === ButtonOutline ||
        child.type === Input ||
        child.type === Select) {
      childProps.style = {
        ...child.props.style,
        marginLeft: -1
      }
    }

    return React.cloneElement(child, childProps)
  })
}

export default Group

