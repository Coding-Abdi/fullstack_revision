import React from 'react';
import './index.css';
import StateTutorial from './StateTutorial.js';
import Input from './Input.js';
// import ReducerTutorial from './ReducerTutorial.js';
import ReducerTwo from './ReducerTwo.js';

function App() {
  return (
    <div className="App">
      <StateTutorial/>
      <Input />
      <ReducerTwo />
    </div>
  );
}

export default App;

// <ReducerTutorial />