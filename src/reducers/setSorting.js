import { SET_SORTING } from '../actions'

const setSorting = (state = {}, action) => {
  switch (action.type) {
  case SET_SORTING:
    return {
      ...state,
      sortType: action.sortType
    }
  default:
    return state
  }
}

export default setSorting
