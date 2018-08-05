import { EDIT } from '../Actions/types'

const initialState = {
  name: '', 
  email: '', 
  city: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT:
      return action.payload
    default:
      return state
  }
}
