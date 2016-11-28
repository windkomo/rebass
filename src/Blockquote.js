
import React from 'react'
import withRebass from './withRebass'

/**
 * Stylized blockquote element with citation link
 */

const Blockquote = ({
  source,
  href,
  children,
  theme,
  sx,
  ...props
}) => {
  const { fontSizes, scale } = theme

  const styles = {
    root: {
      fontSize: fontSizes[3],
      fontStyle: 'italic',
      margin: 0,
      marginBottom: scale[2]
    },
    p: {
      margin: 0,
      marginBottom: scale[1],
    },
    cite: {
      fontSize: fontSizes[5],
      fontStyle: 'normal',
    },
    source: {
      color: 'inherit',
    }
  }

  return (
    <blockquote
      {...props}
      {...sx(styles.root)}>
      <p {...sx(styles.p)}>
        {children}
      </p>
      <cite {...sx(styles.cite)}>
        {'— '}
        <a href={href}
          {...sx(styles.source)}
          children={source} />
      </cite>
    </blockquote>
  )
}

Blockquote.propTypes = {
  /** Name of source */
  source: React.PropTypes.string,
  /** URL link to source */
  href: React.PropTypes.string
}

Blockquote._name = 'Blockquote'

export default withRebass(Blockquote)

