import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p> This is Super Cool!</p>
        <Person name='Tylor' age='29' />
        <Person name='Alec' age='32'>My Hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;
