import { Context } from '../fluent'
import { Dictionary } from '@cerebral/fluent'
import { SWCharacter } from './types'

export function redirectToAll({ router }: Context) {
  router.redirect('/all')
}

export function setSearchInProgress({
  state,
  props
}: Context<{ status: boolean }>) {
  state.searchInProgress = props.status
}

export function changeFilter({ state, props }: Context<{ filter: string }>) {
  state.filter = props.filter
}

export function searchSwApi({
  state,
  props,
  http
}: Context<{
  searchresult: Dictionary<SWCharacter>
  searchResultsReady: boolean
  searchError: string
  filter: string
}>) {
  return http
    .get(`/people/?search=${props.filter}`)
    .then(response => {
      state.searchError = ''
      // state.searchResultsReady = true  //This will throw an error. Any idea why?
      state.searchresult.clear()
      for (let characterFromApi of response.result['results']) {
        let name = characterFromApi.name
        let characterToState = {}
        characterToState[name] = { name }
        state.searchresult.merge(characterToState)
      }
    })
    .catch(error => {
      state.searchError = 'Error in search.' + error
      // state.searchResultsReady = false
    })
}
