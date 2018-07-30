import { combineReducers } from 'redux'
import user from './user'

const rootReducer = combineReducers({
  posts: user
})

export default rootReducer
