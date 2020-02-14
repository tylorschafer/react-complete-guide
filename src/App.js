import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: green;
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: lightgreen;
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Tylor', age: 29 },
      { id: 2, name: 'Blue', age: 8 },
      { id: 3, name: 'Sara', age:27 }
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // using spread and destructuring to copy old array so we don't overwrite state
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key = {person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              changed= {(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}> This is Super Cool!</p>
        <StyledButton onClick={this.togglePersonsHandler}>
          Show / Hide
        </StyledButton> 
        {persons}
      </div>
    );
  }
}

export default App;
