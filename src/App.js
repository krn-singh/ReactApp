import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Karan', age: '26' },
      { id: '2', name: 'Kanwal', age: '26' },
      { id: '3', name: 'Raghav', age: '28' }
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

  inputNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      display: 'inline-block',
      padding: '8px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid black',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

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

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const styleClasses = [];
    if (this.state.persons.length <= 2) {
      styleClasses.push('red');
    }

    if (this.state.persons.length <= 1) {
      styleClasses.push('bold');
    }

    return (
      <div className="App">
        <h1>React App</h1>
        <p className={styleClasses.join(' ')}>Guest List</p>
        <button 
        style={style}
        onClick={this.toggleContent}>Toggle Names</button>
        {persons} 
      </div>
    );
  }

}

export default Radium(App);