import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Users, UsersMap } from 'react-codechallenge2-const'
import { connect } from 'react-redux'
import { fetchUsers } from '../Actions/postActions'

class UsersComponent extends Component {
  componentWillMount () {
    this.props.fetchUsers()
  }

  componentWillReceiveProps (nextProps) {
    this.setState(nextProps.users)
  }

  render () {
    const onDeleteClick = id => {
      this.props.onDeleteClick(id)
    }

    return (
      <Users
        onDeleteClick={onDeleteClick}
        onChangeClick={this.props.onChangeClick}>
        {UsersMap(this.props.users, this.props.onChangeClick, onDeleteClick)}
      </Users>
    )
  }
}

UsersComponent.propTypes = {
  // fetchUsers: PropTypes.func.IsRequired,
  users: PropTypes.narray.IsRequired
}

const mapStateToPprops = state => ({
  users: state.users
  // newUser: state.posts.user
})

export default connect(mapStateToPprops, { fetchUsers })(UsersComponent)
