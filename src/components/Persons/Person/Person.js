import React, { useEffect, useRef } from 'react';
import classes from './Person.css';
import Aux from './../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

const person = (props) => {
    const inputElement = useRef(null);
    
    useEffect(() => {
        inputElement.current.focus();
    });

    return (
        <Aux>
            <p onClick={props.click}>Person name: {props.name} and age: {props.age}</p>
            <p>{props.children}</p>
            <input 
            type="text" 
            ref={inputElement}
            onChange={props.change}
            value ={props.name}/>
        </Aux>       
    );
}

person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
}

export default withClass(person, classes.Person);