import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = () => {
    const [ personState, setPersonState ] = useState({
      persons: [
        { name: 'Karan', age: '26'},
        { name: 'Kanwal', age: '26'}
      ]
    });

    const changeNameHandler = () => {
      setPersonState({
        persons: [
          { name: 'Karanbir', age: '26'},
          { name: 'Kanwaljot', age: '26'}
        ]
      })
    }

    return (
      <div className="App">
        <h2>React App</h2>
        <Person name = {personState.persons[0].name} age = {personState.persons[0].age}>Hello from Karan</Person>
        <Person name = {personState.persons[1].name} age = {personState.persons[1].age} />
        <button onClick = {changeNameHandler}>Change Name</button>
      </div>
    );
}

export default App;