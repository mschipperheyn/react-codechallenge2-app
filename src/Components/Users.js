import React from 'react';
import User from './Users/User'
import Head from './Users/Head'

const Map = props => {
    return props.users.map((user, index) => (
        <User
            key={index}
            name={user.name}
            email={user.email}
            city={user.city}
            onDeleteClick={()=> props.onDeleteClick(user.id)}
            onChangeClick={() => props.onChangeClick(user)}
            />
    ));
};

const Users = props => {

    return (
        <div className="table">
            <Head/>
            {Map(props)}
        </div>
    ); 
};

export default Users;