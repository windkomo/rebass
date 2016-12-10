
import React from 'react'
import createComponent from './create-component'
import Heading from './Heading'

/**
 * Heading element with unstyled link. Useful for in-page navigation
 */

export const styles = {
  root: {},
  link: {
    textDecoration: 'none',
    color: 'inherit',
    ':hover': {
      textDecoration: 'underline'
    }
  }
}

const Link = createComponent('a', styles.link)

const Base = ({
  href,
  children,
  ...props
}) => (
  <Heading {...props}>
    <Link
      href={href}
      children={children}
    />
  </Heading>
)

const HeadingLink = createComponent(Base, styles.root, {
  name: 'HeadingLink'
})

export default HeadingLink

