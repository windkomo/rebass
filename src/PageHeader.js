
import React from 'react'
import createComponent from './create-component'
import Heading from './Heading'
import Text from './Text'

/**
 * Main page header with description
 */

export const styles = ({ scale, colors }) => ({
  paddingTop: scale[3],
  paddingBottom: scale[2],
  marginTop: scale[4],
  marginBottom: scale[4],
  borderBottom: '1px solid',
  borderColor: colors.gray
})

const Base = ({
  heading,
  description,
  children,
  ...props
}) => (
  <header {...props}>
    <Heading level={1} children={heading} />
    {description && (
      <Text children={description} />
    )}
  </header>
)

const PageHeader = createComponent(Base, styles, {
  name: 'PageHeader'
})

export default PageHeader

