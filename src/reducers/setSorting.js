import { SET_SORTING } from '../actions'

const setSorting = (state = 'alpha', action) => {
  switch (action.type) {
  case SET_SORTING:
    return action.sortType
  default:
    return state
  }
}

export default setSorting
