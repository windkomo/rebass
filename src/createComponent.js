
import React from 'react'
import cxs from 'cxs/monolithic'
import classnames from 'classnames'
import baseTheme from './base-theme'
import parseStyleProps from './parse-style-props'

const createComponent = (Tag = 'div') => (styles, theme = {}) => {
  const cx = cxs(styles)
  const th = { ...baseTheme, ...theme }
  const { scale } = th

  const Component = (props) => {
    // Consider using inline styles here
    const { className, ...rest } = parseStyleProps(th)(props, cx)

    return (
      <Tag {...rest} className={className} />
    )
  }

  return Component
}


export default createComponent

