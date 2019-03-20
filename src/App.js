import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Karan', age: '26' },
      { id: '2', name: 'Kanwal', age: '26' }
    ],
    showContent: true
  };

  changeNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: '26' },
        { name: 'Kanwaljot', age: '26' }
      ]
    });
  }

  inputNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  toggleContent = () => {
    const current = this.state.showContent;
    this.setState({
      showContent: !current
    });
  }

  deleteContent = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  render() {
    let persons = null;

    if (this.state.showContent) {
      persons = (
        <div>
          {this.state.persons.map((person, personIndex) => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              change={(event) => this.inputNameHandler(event, person.id)}
              click={() => this.deleteContent(personIndex)} />
          })}
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