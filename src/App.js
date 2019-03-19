import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>React App</h2>
        <Person />
        <Person />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h2', null, 'React App'));
  }
}

export default App;
