import * as React from 'react'

import { connect } from '../fluent'

const getResultTable = results => {
  let table = []
  results.forEach(value => {
    table.push(<li key={value.name}>{value.name}</li>)
  })

  return table
}

export default connect()
  .with(({ state, signals }) => ({
    filter: state.filter,
    redirectToAll: signals.redirectToAll,
    changeFilter: signals.changeFilter,
    searchInProgress: state.searchInProgress,
    searchResultsReady: state.searchResultsReady,
    searchSwApi: signals.searchSwApi,
    searchResults: state.searchresult
  }))
  .to(function App({
    filter,
    redirectToAll,
    changeFilter,
    searchInProgress,
    searchResultsReady,
    searchSwApi,
    searchResults
  }) {
    return (
      <div>
        <br />
        <div className="container">
          <nav className="panel">
            <p className="panel-heading">Search Star Wars characters</p>
            <div className="panel-block">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="search"
                  onChange={event => {
                    if (event.target.value !== '') {
                      changeFilter({ filter: event.target.value })
                    } else {
                      redirectToAll()
                    }
                  }}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-search" />
                </span>
              </p>
              <button
                className="button is-primary"
                onClick={() => {
                  searchSwApi({ filter })
                }}
              >
                Search!
              </button>
            </div>
          </nav>
          <p />
          <br />
          <div className="box">{getResultTable(searchResults)}</div>
        </div>
      </div>
    )
  })
