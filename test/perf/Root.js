
import React from 'react'
import Rebass, { Heading } from '../../src'
import { isElement } from 'react-addons-test-utils'

class Root extends React.Component {
  constructor () {
    super()
    this.state = {
      label: 'test',
      name: 'test',
      src: 'test',
      m: 0
    }
  }

  render () {
    const props = {
      ...this.state
    }

    const comps = Object.keys(Rebass)
      .filter(k => /^[A-Z]/.test(k))
      .filter(k => {
        const Comp = Rebass[k]
        return isElement(<Comp {...props} />)
      })
      .map(k => Rebass[k])

    return (
      <div>
        <Heading children='Rebass Perf Tests' />
        {comps.map((Comp, i) => (
          <Comp key={i} {...props} />
        ))}
      </div>
    )
  }
}

export default Root

