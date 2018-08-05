import {FETCH_POST, EDIT} from './types'
import { selectUsers } from '../api'

export const fetchUsers = () => dispatch => {
  selectUsers()
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_POST,
      payload: data
    }))
}

export const edit = user => dispatch => {
  dispatch({
    type: EDIT,
    payload: user
  })
}

export const clear = () => dispatch => {
  dispatch({
    type: EDIT,
    payload: {name: '', email: '', city: '', id: null}
  })
}
