import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Karan', age: '26' },
      { name: 'Kanwal', age: '26' }
    ],
    showContent: false
  };

  changeNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: '26' },
        { name: 'Kanwaljot', age: '26' }
      ]
    });
  }

  inputNameHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: '26' },
        { name: 'Kanwal', age: '26' }
      ]
    });
  }

  toggleContent = () => {
    const current = this.state.showContent;
    this.setState({
      showContent: !current
    });
  }

  render() {
    let persons = null;

    if (this.state.showContent) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={() => this.changeNameHandler('Karanbir')}
            change={this.inputNameHandler}>Hello from Karan</Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age} />
        </div>
      );
    }

    return (
      <div className="App">
        <h2>React App</h2>
        {persons}
        <button onClick={this.toggleContent}>Change Name</button>
      </div>
    );
  }

}

export default App;