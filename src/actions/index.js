import axios from 'axios'

export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'
export const FETCH_COUNTRIES_SUCESS = 'FETCH_COUNTRIES_SUCESS'
export const FETCH_COUNTRIES_FAIL = 'FETCH_COUNTRIES_FAIL'
export const SET_SORTING = 'SET_SORTING'

const ROOT_URL = 'http://api.population.io:80/1.0/population/'

export const fetchCountries = (year, age) => {
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

export const setSortingFilter = (sortType) => ({
  type: SET_SORTING,
  sortType
})
