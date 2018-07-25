import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserForm from './UserForm';

class UserFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', 
            email: '', 
            city: '', 
            id: null
        }
    }

    render() {
        const onChange = e =>{
            this.setState({[e.target.name]: e.target.value});
        }

        const clear = () =>{
            this.setState({
                name: '', 
                email: '', 
                city: '', 
                id: null
            });
        }

        const onSubmit = e =>{
            e.preventDefault();

            this.props.onSubmit(this.state);

            // const post = {
            //     id: this.state.id,
            //     name: this.state.name,
            //     email: this.state.email,
            //     city: this.state.city,
            // }

            // fetch('', {
            //     method: 'POST',
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(post)
            // })
            // .then(res => res.json())
            // .then(data => consol.log(data));

            clear();
        }
      
        return (
            <UserForm 
                name={this.state.name}
                email={this.state.email}
                city={this.state.city}
                onChange={onChange}
                onSubmit={onSubmit}
                onClear={clear}
            />
          );
    }
}

UserFormComponent.propTypes = {

};

export default UserFormComponent;