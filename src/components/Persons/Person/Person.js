import React, { useEffect, useRef, useContext } from 'react';
import classes from './Person.css';
import Aux from './../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

const person = (props) => {
    const inputElement = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        inputElement.current.focus();
    });

    return (
        <Aux>
            {authContext.authentication ? <p>Authenticated</p> : <p>Please log in</p>}
            <p onClick={props.click}>Person name: {props.name} and age: {props.age}</p>
            <p>{props.children}</p>
            <input
                type="text"
                ref={inputElement}
                onChange={props.change}
                value={props.name} />
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