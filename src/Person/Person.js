import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>Person name: {props.name} and age: {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change}/>
        </div>       
    );
}

export default person;