import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Users as UsersConst, UsersMap } from 'react-codechallenge2-const'
import { connect } from 'react-redux'
import { fetchUsers } from '../Actions'

class Users extends Component {
  UNSAFE_componentWillMount () {
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
      <UsersConst
        onDeleteClick={onDeleteClick}
        onChangeClick={this.props.onChangeClick}>
        {UsersMap(this.props.users, this.props.onChangeClick, onDeleteClick)}
      </UsersConst>
    )
  }
}

Users.propTypes = {
  // fetchUsers: PropTypes.func.IsRequired,
  // users: PropTypes.array.IsRequired
}

const mapStateToPprops = state => ({
  users: state.users
  // newUser: state.posts.user
})

export default connect(mapStateToPprops, { fetchUsers })(Users)
