import axios from 'axios'

export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'
export const FETCH_COUNTRIES_SUCESS = 'FETCH_COUNTRIES_SUCESS'
export const FETCH_COUNTRIES_FAIL = 'FETCH_COUNTRIES_FAIL'

const ROOT_URL = 'http://api.population.io/1.0/population/'

export function fetchCountries (year, age) {
  const url = `${ROOT_URL}${year}/aged/${age}/?format=json`
  return function (dispatch) {
    dispatch({type: FETCH_COUNTRIES})
    axios.get(url)
      .then((response) => {
        dispatch({type: FETCH_COUNTRIES_SUCESS, payload: response.data})
      })
      .catch((err) => {
        dispatch({type: FETCH_COUNTRIES_FAIL, payload: err.response})
      })
  }
}
