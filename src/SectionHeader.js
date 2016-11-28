
import React from 'react'
import withRebass from './withRebass'
import HeadingLink from './HeadingLink'
import Text from './Text'

/**
 * Header for section elements
 */

const SectionHeader = ({
  heading,
  href,
  description,
  children,
  theme,
  sx,
  ...props
}) => {
  const { scale, borderColor } = theme

  const styles = {
    root: {
      display: 'flex',
      alignItems: 'center',
      paddingBottom: scale[1],
      marginTop: scale[3],
      marginBottom: scale[3],
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
      borderBottomColor: borderColor,
    },
    inner: {
      flex: '1 1 auto',
    }
  }

  href = href || `#${heading || ''}`

  return (
    <header
      {...props}
      {...sx(styles.root)}>
      <div {...sx(styles.inner)}>
        <HeadingLink
          href={href}
          children={heading} />
        {description && (
          <Text children={description} />
        )}
      </div>
      {children}
    </header>
  )
}

SectionHeader.propTypes = {
  /** Section heading */
  heading: React.PropTypes.string,
  /** Link to section, used in HeadingLink */
  href: React.PropTypes.string,
  /** Description of section */
  description: React.PropTypes.string
}

SectionHeader._name = 'SectionHeader'

export default withRebass(SectionHeader)

