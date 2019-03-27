import React from 'react';
import classes from './Person.css';
import Aux from './../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

const person = (props) => {
    return (
        <Aux>
            <p onClick={props.click}>Person name: {props.name} and age: {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change}/>
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