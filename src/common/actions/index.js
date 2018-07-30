import { selectUsers } from '../api'

export const FETCH_USER = 'FETCH_POST'
export const EDIT = 'EDIT'

export const fetchUsers = () => dispatch => {
  selectUsers()
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_USER,
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
