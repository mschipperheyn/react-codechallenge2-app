import { FETCH_USER, EDIT } from '../Actions'

const initialState = {
  users: [],
  user: {name: '', email: '', city: ''}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        users: action.payload
      }
    case EDIT:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}
