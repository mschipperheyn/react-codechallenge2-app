import React from 'react';

const row = {
};

const cell = {
        display: 'inline-block',
        padding: '20px'
  };

const styles = {
    row: row,
    cell: cell
  };

const user = props => {
    
    return (
        <div style={styles.row}>
            <div style={styles.cell}>{props.name}</div>
            <div style={styles.cell}>{props.email}</div>
            <div style={styles.cell}>{props.city}</div>
            <div style={styles.cell} onClick={props.onDeleteClick}>Delete</div>
            <div style={styles.cell} onClick={props.onChangeClick}>Edit</div>
        </div>
    ); 
};

export default user;