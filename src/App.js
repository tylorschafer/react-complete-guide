import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Tylor', age: 29 },
      { name: 'Blue', age: 8 },
      { name: 'Sara', age:27 }
    ]
  });

  const switchNameHandler = () => {
    setPersonsState({ persons: [
      { name: 'Moe', age: 29 },
      { name: 'Joe', age: 8 },
      { name: 'Poe', age:27 }
    ] })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p> This is Super Cool!</p>
      <button onClick={switchNameHandler}>Switch Names</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default app;
