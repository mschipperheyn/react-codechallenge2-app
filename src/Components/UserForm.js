import React from 'react';

const row = {
};

const cell = {
        display: 'inline-block',
        padding: '10px'
  };

const styles = {
    row: row,
    cell: cell
  };

const UserForm = props => {
    return (
        <div>
            <form onSubmit={props.onSubmit} style={styles.row}>
                <div style={styles.cell}>
                    <label>Name: </label>
                    <br/>
                    <input type="text" name="name" onChange={props.onNameChange} value={props.name}/>
                </div>
                <div style={styles.cell}>
                    <label>E-mail: </label>
                    <br/>
                    <input type="text" name="email" onChange={props.onEmailChange} value={props.email}/>
                </div>
                <div style={styles.cell}>
                    <label>City: </label>
                    <br/>
                    <input type="text" name="city" onChange={props.onCityChange} value={props.city}/>
                </div>

                <button type="submit">Submit</button>
                <label onClick={props.onClear}>Clear</label>
            </form>
        </div>
    ); 
};

export default UserForm;