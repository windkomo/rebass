
import React from 'react'
import createComponent from './create-component'
import Heading from './Heading'
import HeadingLink from './HeadingLink'
import Text from './Text'

/**
 * Header for section elements
 */

export const styles = ({
  scale,
  colors
}) => ({
  display: 'flex',
  alignItems: 'center',
  paddingBottom: scale[1],
  marginTop: scale[3],
  marginBottom: scale[3],
  borderBottom: '1px solid',
  borderColor: colors.gray
})

const Base = ({
  heading,
  description,
  href,
  ...props
}) => {
  const H = href ? HeadingLink : Heading

  return (
    <header {...props}>
      <H
        href={href}
        children={heading} />
      {description && (
        <Text
          children={description} />
      )}
    </header>
  )
}

const SectionHeader = createComponent(Base, styles, {
  name: 'SectionHeader'
})

export default SectionHeader

