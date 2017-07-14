import React from 'react'
import styled from 'styled-components'
import {
  Provider,
  Toolbar,
  NavLink,
  Fixed,
  Border,
  Box,
} from '../src'

const Sidebar = styled(Fixed)([], {
  '@media screen and (max-width: 32em)': {
    display: 'none'
  }
})

const Root = props => {
  return (
    <Provider>
      <Toolbar py={1}>
        <NavLink
          href='http://jxnblk.com/rebass'
          children='Rebass'
        />
        <NavLink
          href='#!'
          children='Examples'
          onClick={e => {
            props.update({ index: -1 })
          }}
        />
      </Toolbar>
      <Sidebar
        w={176}
        mt={5}
        py={0}
        top
        left
        bottom>
        <Border right>
          {props.components.map((comp, i) => (
            <NavLink
              key={comp.name}
              href='#!'
              children={comp.name}
              onClick={e => {
                props.update({ index: i })
              }}
              f={0}
              w={1}
              active={i === props.index}
            />
          ))}
        </Border>
      </Sidebar>
      <Box pl={[ 3, 192 ]}
        pr={3}
        py={3}>
        {props.children}
      </Box>
    </Provider>
  )
}

export default Root
