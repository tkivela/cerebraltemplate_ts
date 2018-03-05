import { Dictionary } from '@cerebral/fluent'
import * as signals from './sequences'

export type SWCharacter = {
  name: string
}

export type State = {
  filter: string
  searchInProgress: boolean
  searchResultsReady: boolean
  searchresult: Dictionary<SWCharacter>
  searchError: string
}

export type Signals = { [key in keyof typeof signals]: typeof signals[key] }
