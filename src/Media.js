
import React from 'react'
import withRebass from './withRebass'

/**
 * Media object with vertical alignment using flexbox
 */

const Media = ({
  img,
  right,
  align,
  imgWidth,
  imgHeight,
  children,
  theme,
  sx,
  ...props
}) => {
  const { scale } = theme

  const alignment = {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end'
  }

  const alignItems = alignment[align]

  const styles = {
    root: {
      display: 'flex',
      marginBottom: scale[2],
      alignItems,
    },
    image: {
      flex: 'none',
      maxWidth: 'none',
      marginRight: right ? 0 : scale[2],
      marginLeft: right ? scale[2] : 0,
      order: right ? 9999 : null,
    }
  }

  return (
    <div {...props} {...sx(styles.root)}>
      <img
        {...sx(styles.image)}
        src={img}
        width={imgWidth}
        height={imgHeight}
      />
      <div children={children} />
    </div>
  )
}

Media.propTypes = {
  /** Image source */
  img: React.PropTypes.string,
  /** Displays image to the right */
  right: React.PropTypes.bool,
  /** Vertical alignment */
  align: React.PropTypes.oneOf(['top', 'center', 'bottom'])
}

Media._name = 'Media'

export default withRebass(Media)

