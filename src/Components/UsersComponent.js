import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Users from './Users';

class UsersComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users : []
        }
    }

    componentWillMount() {
        this.setState({
            // users : []
            users: [
                {name: 'Clack Houf Time', email: 'chtime@email.com', city: 'New York', id: 1},
                {name: 'Clack Houf Time2', email: 'chtime2@email.com', city: 'New York', id: 2},
                {name: 'myname3', email: 'myemail3', city: 'mycity3', id: 3 }
            ]
        })
        // fetch('')
        // .then(res => res.json())
        // .then(data => this.setState({users: data}));
    }

    render() {
          const onDeleteClick = id =>{
            console.log(id);
            this.props.onDeleteClick(id);
          } 
      
        return (
            <Users 
            users={this.state.users}
            onDeleteClick={onDeleteClick}
            onChangeClick={this.props.onChangeClick}/>
        );
    }
}

UsersComponent.propTypes = {

};

export default UsersComponent;