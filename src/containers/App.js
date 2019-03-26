import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

  componentDidMount() {
    console.log('App.js componentDidMount');
  }

  componentDidUpdate() {
    console.log('App.js componentDidUpdate');
  }

  shouldComponentUpdate() {
    console.log('App.js shouldComponentUpdate');
    return true;
  }

  render() {
    let persons = null;

    if (this.state.showContent) {
      persons = <Persons 
            persons={this.state.persons}
            changed={this.inputNameHandler}
            clicked={this.deleteContent} />   
    }

    return (
      <div className={classes.App}>
          <Cockpit 
          title={this.props.appTitle}
          showContent={this.state.showContent}
          persons={this.state.persons}
          clicked={this.toggleContent}/>
          {persons}
        </div>
    );
  }

}

export default App;