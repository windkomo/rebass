
import React from 'react'
import { createRouter } from 'rrx'
import Rebass from 'rebass'
import Nav from './Nav'
import StyleGuide from './StyleGuide'

const {
  H1
} = Rebass

class App extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <Nav />
        <H1>Rebass</H1>
        <StyleGuide
          pattern='/styleguide'
        />
      </div>
    )
  }
}

export default createRouter(App)

