import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Karan', age: '26'},
      { name: 'Kanwal', age: '26'}
    ]
  }

  changeNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Karanbir', age: '26'},
        { name: 'Kanwaljot', age: '26'}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h2>React App</h2>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}>Hello from Karan</Person>
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} />
        <button onClick = {this.changeNameHandler}>Change Name</button>
      </div>
    );
  }
}

export default App;
