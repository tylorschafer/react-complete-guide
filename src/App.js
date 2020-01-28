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

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p> This is Super Cool!</p>
        <button 
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Tylord')}>Switch Names</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Jesus')}
          changed={this.nameChangedHandler} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
