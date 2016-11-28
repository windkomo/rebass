
import React from 'react'
import withRebass from './withRebass'

/**
 * Breadcrumb navigation links
 */

const Breadcrumbs = ({
  links,
  children,
  theme,
  subStyles,
  transformStyle,
  ...props
}) => {
  const { fontSizes, scale } = theme

  const sx = {
    root: {
      fontSize: fontSizes[5],
      display: 'flex',
      marginBottom: scale[2],
      alignItems: 'center'
    },
    spacer: {
      marginLeft: '.5em',
      marginRight: '.5em',
      ...subStyles.spacer
    }
  }

  return (
    <div
      {...props}
      {...transformStyle(props, sx)}>
      {links.map((link, i) => {
        const linkStyle = {
          color: 'inherit',
          textDecoration: i === links.length - 1 ? 'none' : null
        }

        return (
          <div key={i}>
            <a
              {...link}
              {...transformStyle({}, linkStyle)}
            />
            {i < links.length - 1 && (
              <span {...transformStyle({}, sx.spacer)}>/</span>
            )}
          </div>
        )
      })}
    </div>
  )
}

Breadcrumbs.propTypes = {
  /** Array of link props */
  links: React.PropTypes.array.isRequired
}

Breadcrumbs.defaultProps = {
  links: []
}

Breadcrumbs._name = 'Breadcrumbs'

export default withRebass(Breadcrumbs)

