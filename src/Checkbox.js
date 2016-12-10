
import React from 'react'
import createComponent from './create-component'
import Label from './Label'

/**
 * Checkbox input with label
 */

export const styles = {
  root: ({
    scale,
    colors
  }, {
    invalid
  }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    // To do
    // flexDirection: stacked ? 'column' : null,
    paddingBottom: scale[1],
    color: invalid ? colors.red : null,
    cursor: 'pointer'
  }),
  input: {
    position: 'absolute',
    zIndex: -1,
    opacity: 0,
  },
  box: ({
    scale,
    colors,
    borderRadius
  }, { checked }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale[2],
    height: scale[2],
    marginRight: scale[1],
    // To do:
    // marginRight: stacked ? null : scale[1],
    // marginBottom: stacked ? scale[1] : null,
    borderRadius,
    border: '2px solid',
    transition: 'background-color .1s ease-out',
    ...(checked ? {
      color: colors.white,
      backgroundColor: colors.green,
      borderColor: colors.green
    } : {
      borderColor: colors.gray
    })
  }),
  icon: (theme, { checked }) => ({
    display: checked ? null : 'none',
    width: '75%',
    height: '75%',
    marginTop: 1,
    fill: 'currentcolor'
  })
}

const Input = createComponent('input', styles.input)

const Box = createComponent('div', styles.box)

const IconBase = (props) => {
  return (
    <svg {...props} viewBox='0 0 32 32'>
      <path d='M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z' />
    </svg>
  )
}

const Icon = createComponent(IconBase, styles.icon)

const Base = ({
  children,
  ...props
}) => {
  // To do: split style and input props
  return (
    <Label>
      <Input
        {...props}
        type='checkbox'
      />
      <Box checked={props.checked}>
        <Icon checked={props.checked} />
      </Box>
      {children}
    </Label>
  )
}

const Checkbox = createComponent(Base, styles.root, {
  name: 'Checkbox'
})

export default Checkbox

