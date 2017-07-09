import React from 'react'
import { storiesOf } from '@storybook/react'
import { Debug } from '../src'

storiesOf('Debug', module)
  .add('Default', () => (
    <Debug
      hello='hi'
      things={[
        2, 4, 8, 16, 32, 64, 128
      ]}
    />
  ))
