import { FETCH_POST } from '../Actions/types'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST:
      return action.payload
    default:
      return state
  }
}
