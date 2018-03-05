import { Module, pathFor, Dictionary } from '@cerebral/fluent'
import HttpProvider from '@cerebral/http'
import Router from '@cerebral/router'

import * as signals from './sequences'
import { Signals, State, SWCharacter } from './types'

const router = Router({
  onlyHash: true,
  query: true,
  routes: [
    { path: '/', signal: pathFor<Signals>(x => x.redirectToAll) },
    { path: '/:filter', signal: pathFor<Signals>(x => x.changeFilter) }
  ]
})

const http = HttpProvider({
  // Prefix all requests with this url
  baseUrl: 'https://swapi.co/api',

  // Any default headers to pass on requests
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    Accept: 'application/json'
  }
})

const state: State = {
  filter: '',
  searchInProgress: false,
  searchResultsReady: false,
  searchresult: Dictionary<SWCharacter>({}),
  searchError: ''
}

export default Module({
  state,
  signals,
  modules: {
    router
  },
  providers: { http }
})
