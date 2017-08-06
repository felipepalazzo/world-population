import axios from 'axios'

const ROOT_URL = 'http://api.population.io/1.0/population/'

export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'

export function fetchCountries (year, age) {
  const url = `${ROOT_URL}/${year}/aged/${age}/?format=json`
  const request = axios.get(url)

  return {
    type: FETCH_COUNTRIES,
    payload: request
  }
}
