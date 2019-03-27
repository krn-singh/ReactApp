import React from 'react';
import classes from './Person.css';
import Aux from './../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

const person = (props) => {
    return (
        <Aux>
            <p onClick={props.click}>Person name: {props.name} and age: {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change}/>
        </Aux>       
    );
}

export default withClass(person, classes.Person);