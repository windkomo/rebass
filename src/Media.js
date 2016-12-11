
import React from 'react'
import createComponent from './create-component'

/**
 * Media object with vertical alignment using flexbox
 */

export const styles = {
  root: ({ scale }, { align }) => {
    const alignItems = alignments[align]
    return {
      display: 'flex',
      marginBottom: scale[2],
      alignItems
    }
  },
  image: ({ scale }, { right }) => ({
    flex: 'none',
    maxWidth: 'none',
    marginRight: right ? 0 : scale[2],
    marginLeft: right ? scale[2] : 0,
    order: right ? 9999 : null
  })
}

const Image = createComponent('img', styles.image)

const Base = ({
  img,
  imgWidth,
  imgHeight,
  right,
  children,
  ...props
}) => (
  <div {...props}>
    <Image
      src={img}
      width={imgWidth}
      height={imgHeight}
      right={right}
    />
    <div>
      {children}
    </div>
  </div>
)

const Media = createComponent(Base, styles.root, {
  name: 'Media'
})

const alignments = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end'
}

export default Media

/*
const Media = ({
  img,
  right,
  align,
  imgWidth,
  imgHeight,
  children,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale } = theme

  const alignment = {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end'
  }

  const alignItems = alignment[align]

  const cx = classnames('Media', className)

  const sx = {
    root: {
      display: 'flex',
      marginBottom: scale[2],
      alignItems,
      ...style
    },
    image: {
      flex: 'none',
      maxWidth: 'none',
      marginRight: right ? 0 : scale[2],
      marginLeft: right ? scale[2] : 0,
      order: right ? 9999 : null,
      ...subComponentStyles.image
    },
    body: {
      ...subComponentStyles.body
    }
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx.root}>
      <img
        src={img}
        width={imgWidth}
        height={imgHeight}
        style={sx.image} />
      <div
        style={sx.body}
        children={children} />
    </div>
  )
}


Media._name = 'Media'

export default withRebass(Media)

*/
