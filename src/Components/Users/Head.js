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

const Head = props => {
    return (
        <div style={styles.row}>
            <div style={styles.cell}>Name</div>
            <div style={styles.cell}>E-mail</div>
            <div style={styles.cell}>City</div>
        </div>
    ); 
};

export default Head;