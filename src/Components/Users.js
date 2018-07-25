import React from 'react';
import User from './Users/User'
import Head from './Users/Head'

const Map = (users, onChangeClick, onDeleteClick) => {
    return (
        users.map((user, index) => (
        <User
            key={index}
            name={user.name}
            email={user.email}
            city={user.city}
            onDeleteClick={()=> onDeleteClick(user.id)}
            onChangeClick={() => onChangeClick(user)}
            />
    )));
};

const Users = props => {

    return (
        <div className="table">
            <Head/>
            {Map(props.users, props.onChangeClick, props.onDeleteClick)}
        </div>
    ); 
};

export default Users;