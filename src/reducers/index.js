import { combineReducers } from 'redux'
import fetchCountries from './fetchCountries'
import setSorting from './setSorting'

const app = combineReducers({
  fetchCountries,
  setSorting
})

export default app
