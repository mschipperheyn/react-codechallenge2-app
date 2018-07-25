import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserForm from './UserForm';

class UserFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: { name: '', email: '', city: '', id: null }
        }
    }

    nameChangeHandler = event => {
        this.setState({
            user: { 
            name: event.target.value, 
            email: this.state.user.email, 
            city: this.state.user.city, 
            id: this.state.user.id
            }
        })
    }
    
    emailChangeHandler = event => {
        this.setState({
            user: { 
            name: this.state.user.name, 
            email: event.target.value, 
            city: this.state.user.city,
            id: this.state.user.id
            }
        })
    }
    
    cityChangeHandler = event => {
        this.setState({
            user: { 
            name: this.state.user.name, 
            email: this.state.user.email, 
            city: event.target.value,
            id: this.state.user.id
            }
        })
    }

    
    render() {
        const clear = () =>{
            this.setState({
                user: { name: '', email: '', city: '', id: null }
            });
        }

        const onSubmit = e =>{
            e.preventDefault();
            this.props.onSubmit(this.state.user);
            clear();
        }
      
        return (
            <UserForm 
                name={this.state.user.name}
                email={this.state.user.email}
                city={this.state.user.city}
                onNameChange={this.nameChangeHandler}
                onEmailChange={this.emailChangeHandler}
                onCityChange={this.cityChangeHandler}
                onSubmit={onSubmit}
                onClear={clear}
            />
          );
    }
}

UserFormComponent.propTypes = {

};

export default UserFormComponent;