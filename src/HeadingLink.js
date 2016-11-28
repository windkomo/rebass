
import React from 'react'
import withRebass from './withRebass'
import Heading from './Heading'

/**
 * Heading element with unstyled link. Useful for in-page navigation
 */

const HeadingLink = ({
  level,
  size,
  href,
  alt,
  theme,
  sx,
  ...props
}) => {
  const styles = {
    link: {
      color: 'inherit',
      textDecoration: 'none',
    }
  }

  return (
    <Heading
      alt={alt}
      level={level}
      size={size}>
      <a
        {...props}
        {...sx(styles.link)}
        href={href}
      />
    </Heading>
  )
}

HeadingLink.propTypes = {
  /** Heading level, e.g. level={1} for <h1> */
  level: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  /** Visual size of heading */
  size: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  /** href for link */
  href: React.PropTypes.string
}

HeadingLink.defaultProps = {
  level: 2,
  href: '#!'
}

HeadingLink._name = 'HeadingLink'

export default withRebass(HeadingLink)

