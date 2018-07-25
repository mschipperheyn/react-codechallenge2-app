import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UsersComponent from './Components/UsersComponent';
import UserFormComponent from './Components/UserFormComponent';

class App extends Component {
  state = {
    users: [
      {name: 'Clack Houf Time', email: 'chtime@email.com', city: 'New York', id: 1},
      {name: 'Clack Houf Time2', email: 'chtime2@email.com', city: 'New York', id: 2},
      {name: 'myname3', email: 'myemail3', city: 'mycity3', id: 3 }
    ],
    user: { name: '', email: '', city: '', id: null }
  }

  render() {
    
    const onDelete = id =>{
      // console.log(id);
    } 

    const onChange = user =>{
      console.log(user);
    }

    const onSubmit = user =>{
      // e.preventDefault();
      console.log(user);
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <UserFormComponent 
          onSubmit={onSubmit}
        />
        {/* <Users users={users}/> */}
        <UsersComponent 
          onChangeClick={onChange}
          onDeleteClick={onDelete}
        />
      </div>
    );
  }
}

export default App;
