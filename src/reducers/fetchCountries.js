import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_SUCESS,
  FETCH_COUNTRIES_FAIL,
} from '../actions'

const initialState = {
  countries: [],
  fetching: false,
  fetched: false,
  error: null,
}

const fetchCountries = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_COUNTRIES:
    return {...state, fetching: true}
  case FETCH_COUNTRIES_SUCESS:
    return {
      ...state,
      fetching: false,
      fetched: true,
      countries: action.payload,
    }
  case FETCH_COUNTRIES_FAIL:
    return {
      ...state,
      fetching: false,
      error: action.payload,
    }
  default:
    return state
  }
}

export default fetchCountries
