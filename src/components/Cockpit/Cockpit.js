import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const styleClasses = [];
    let btnStyle = '';

    if (props.showContent) {
        btnStyle = classes.Red;
    }
    
    if (props.persons.length <= 2) {
      styleClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
      styleClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>React App</h1>
            <p className={styleClasses.join(' ')}>Guest List</p>
            <button
                className={btnStyle}
                onClick={props.clicked}>Toggle Names</button>
        </div>
    );
}

export default cockpit;