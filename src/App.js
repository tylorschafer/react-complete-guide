import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Tylor', age: 29 },
      { name: 'Blue', age: 8 },
      { name: 'Sara', age:27 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({ persons: [
      { name: newName, age: 29 },
      { name: 'Joe', age: 8 },
      { name: 'Poe', age:27 }
    ] })
  }

  nameChangedHandler = (event) => {
    this.setState({ persons: [
      { name: 'Tylor', age: 29 },
      { name: event.target.value, age: 8 },
      { name: 'Sara', age:27 }
    ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
              name={person.name} 
              age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p> This is Super Cool!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Show / Hide
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
