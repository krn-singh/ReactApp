import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)' : {
            width: '400px'
        }
    }

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>Person name: {props.name} and age: {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change}/>
        </div>       
    );
}

export default Radium(person);