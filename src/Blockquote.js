
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
  subStyles,
  transformStyle,
  ...props
}) => {
  const { fontSizes, scale } = theme

  const sx = {
    root: {
      fontSize: fontSizes[3],
      fontStyle: 'italic',
      margin: 0,
      marginBottom: scale[2]
    },
    p: {
      margin: 0,
      marginBottom: scale[1],
      ...subStyles.p
    },
    cite: {
      fontSize: fontSizes[5],
      fontStyle: 'normal',
      ...subStyles.cite
    },
    source: {
      color: 'inherit',
      ...subStyles.source
    }
  }

  return (
    <blockquote
      {...props}
      {...transformStyle(props, sx)}>
      <p {...transformStyle({}, sx.p)}>
        {children}
      </p>
      <cite {...transformStyle({}, sx.cite)}>
        {'— '}
        <a href={href}
          {...transformStyle({}, sx.source)}
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

