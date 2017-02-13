
import React from 'react'
import cxs from 'cxs/monolithic'
import classnames from 'classnames'

// To do: add m/p props

const createComponent = (Tag = 'div') => (styles) => {
  const cx = cxs(styles)

  const Component = ({ className, ...rest }) => {
    return (
      <Tag
        {...rest}
        className={classnames(cx, className)}
      />
    )
  }

  return Component
}

export default createComponent

