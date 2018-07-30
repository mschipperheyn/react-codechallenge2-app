import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootreducer from '../reducers'

const initialState = {}

const store = createStore(
  rootreducer,
  initialState,
  applyMiddleware(thunk)
)

export default store
