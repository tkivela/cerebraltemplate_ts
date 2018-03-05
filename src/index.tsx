import { Container, Controller } from '@cerebral/fluent'

import Devtools from 'cerebral/devtools'
import * as React from 'react'
import { render } from 'react-dom'

import App from './components/App'
import module from './module'

const controller = Controller(module, {
  devtools: Devtools({
    host: 'localhost:8686',
    // By default the devtools tries to reconnect
    // to debugger when it can not be reached, but
    // we don't want that
    reconnect: false
  })
})

render(
  <Container controller={controller}>
    <App />
  </Container>,
  document.getElementById('root')
)
