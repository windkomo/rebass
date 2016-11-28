
import React from 'react'
import withRebass from './withRebass'
import Heading from './Heading'
import Text from './Text'

/**
 * Main page header with description
 */

const PageHeader = ({
  heading,
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
      flexWrap: 'wrap',
      alignItems: 'center',
      paddingTop: scale[3],
      paddingBottom: scale[2],
      marginTop: scale[4],
      marginBottom: scale[4],
      borderBottomWidth: 2,
      borderBottomStyle: 'solid',
      borderColor,
    },
    inner: {
      flex: '1 1 auto',
    }
  }

  return (
    <header
      {...props}
      {...sx(styles.root)}>
      <div {...sx(styles.inner)}>
        <Heading
          level={1}
          children={heading} />
        {description && (
          <Text children={description} />
        )}
      </div>
      {children}
    </header>
  )
}

PageHeader.propTypes = {
  /** Page heading */
  heading: React.PropTypes.string,
  /** Description of page */
  description: React.PropTypes.string
}

PageHeader._name = 'PageHeader'

export default withRebass(PageHeader)

