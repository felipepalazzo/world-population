import { FETCH_COUNTRIES } from '../actions'

export default function (state = [], action) {
  switch (action.type) {
  case FETCH_COUNTRIES:
    return [action.payload.data, ...state]
  }
  return state
}
