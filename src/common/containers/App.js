import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UserActions from '../actions'
import Users from './Users'
import UserForm from './UserForm'
import { deleteUser } from '../api'

class App extends Component {
  render () {
    const onDelete = id => {
      deleteUser(id)
        .then(res => res.json())
        .then(_user => this.props.fetchUsers())
    }

    const onChange = user => {
      this.props.edit(user)
    }

    const onSaved = () => {
      this.props.fetchUsers()
    }

    return (
      <div className="App">
        <UserForm
          onSaved={onSaved}
        />
        <Users
          onChangeClick={onChange}
          onDeleteClick={onDelete}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // counter: state.counter,
})

function mapDispatchToProps (dispatch) {
  return bindActionCreators(UserActions, dispatch)
}

App.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
