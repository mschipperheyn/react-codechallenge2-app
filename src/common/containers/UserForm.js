import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { UserForm as UserFormConst } from 'react-codechallenge2-const'
import {connect} from 'react-redux'
import { clear } from '../Actions'
import { updateUser, insertUser } from '../api'

class UserForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      city: ''
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState(nextProps.userEdit)
  }

  render () {
    const onChange = e => {
      this.setState({[e.target.name]: e.target.value})
    }

    const onSaved = (user) => {
      if (this.props.onSaved) {
        this.props.onSaved()
      }

      this.props.clear()
    }

    const onSubmit = e => {
      e.preventDefault()

      const user = {
        name: this.state.name,
        email: this.state.email,
        city: this.state.city
      }

      // this.props.createPost(user)

      if (this.state.id) {
        updateUser(this.state.id, user)
          .then(res => res.json())
          .then(data => onSaved(data))
      } else {
        insertUser(user)
          .then(res => res.json())
          .then(data => onSaved(data))
      }
    }

    return (
      <UserFormConst
        name={this.state.name}
        email={this.state.email}
        city={this.state.city}
        onChange={onChange}
        onSubmit={onSubmit}
        onClear={this.props.clear}
      />
    )
  }
}

UserForm.propTypes = {
  // createPost: PropTypes.func.isRequired,
  // user: PropTypes.array.isRequired
}

const mapStateToPprops = state => ({
  userEdit: state.user
})

export default connect(mapStateToPprops, {clear})(UserForm)
