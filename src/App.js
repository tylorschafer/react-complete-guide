import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Tylor', age: 29 },
      { name: 'Blue', age: 8 },
      { name: 'Sara', age:27 }
    ]
  }

  switchNameHandler = () => {
    this.setState({ persons: [
      { name: 'Moe', age: 29 },
      { name: 'Joe', age: 8 },
      { name: 'Poe', age:27 }
    ] })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p> This is Super Cool!</p>
        <button onClick={this.switchNameHandler}>Switch Names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
