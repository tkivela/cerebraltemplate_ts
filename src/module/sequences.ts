import { sequence, sequenceWithProps } from '../fluent'
import * as actions from './actions'

export const redirectToAll = sequence(s => s.action(actions.redirectToAll))

export const changeFilter = sequenceWithProps<{ filter: string }>(s =>
  s.action(actions.changeFilter)
)

export const setSearchInProgress = sequenceWithProps<{ status: boolean }>(s =>
  s.action(actions.setSearchInProgress)
)

export const searchSwApi = sequenceWithProps<{ filter: string }>(s =>
  s.action(actions.searchSwApi)
)
