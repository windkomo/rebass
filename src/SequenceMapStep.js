
import React from 'react'
import withRebass from './withRebass'
import LinkBlock from './LinkBlock'

/**
 * Subcomponent for use in SequenceMap
 */

const SequenceMapStep = ({
  width,
  first,
  active,
  children,
  theme,
  sx,
  ...props
}, { rebass }) => {
  const { scale, colors } = theme

  const styles = {
    link: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      lineHeight: 1.25,
      flex: `1 1 ${width}`,
      paddingLeft: scale[1],
      paddingRight: scale[1],
    },
    dot: {
      position: 'relative',
      zIndex: 1,
      display: 'inline-block',
      width: scale[2],
      height: scale[2],
      marginBottom: scale[1],
      borderRadius: 99999,
      backgroundColor: 'currentcolor',
    },
    line: {
      position: 'absolute',
      top: scale[2] / 2,
      transform: 'translate(-50%, -50%)',
      left: 0,
      right: 0,
      height: 4,
      backgroundColor: 'currentcolor',
    },
    label: {
    },
    active: {
      color: colors.primary,
    }
  }

  return (
    <LinkBlock
      {...props}
      {...sx(styles.link, ...(active ? sx.active : {}))}>
      <div {...sx(styles.dot)} />
      {!first && <div {...sx(styles.line)} />}
      <div {...sx(styles.label)}>
        {children}
      </div>
    </LinkBlock>
  )
}

SequenceMapStep.propTypes = {
  /** Width of step */
  width: React.PropTypes.string,
  /** Removes line from first step */
  first: React.PropTypes.bool,
  /** Sets primary color on active step */
  active: React.PropTypes.bool
}

SequenceMapStep._name = 'SequenceMapStep'

export default withRebass(SequenceMapStep)

