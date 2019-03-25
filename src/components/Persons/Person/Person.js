import React from 'react';
import classes from './Person.css';

const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>Person name: {props.name} and age: {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change}/>
        </div>       
    );
}

export default person;