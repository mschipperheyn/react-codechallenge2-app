import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootreducer from './Reducers'

const initialState = {}

const middleware = () => {
  var isCrhomeDev = true
  if (isCrhomeDev) {
    return compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  } else {
    return applyMiddleware(thunk)
  }
}

const store = createStore(
  rootreducer,
  initialState,
  middleware()
)

export default store
