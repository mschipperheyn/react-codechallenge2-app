import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Users from './Components/Users'
import UserForm from './Components/UserForm'
import { fetchUsers, edit } from './Actions/postActions'

import { Provider } from 'react-redux'

import store from './store'
import { deleteUser } from './api'

class App extends Component {
  render () {
    const onDelete = id => {
      deleteUser(id)
        .then(res => res.json())
        .then(_user => store.dispatch(fetchUsers()))
    }

    const onChange = user => {
      store.dispatch(edit(user))
    }

    const onSaved = () => {
      store.dispatch(fetchUsers())
    }

    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <UserForm
            onSaved={onSaved}
          />
          <Users
            onChangeClick={onChange}
            onDeleteClick={onDelete}
          />
        </div>
      </Provider>
    )
  }
}

export default App
