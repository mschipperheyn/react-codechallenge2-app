import { FETCH_USER } from '../Actions'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload
    default:
      return state
  }
}
