import React from 'react';
import './App.css';
import Heading from './Heading';
import Counter from './Counter'

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <Heading text={'Aplikacja Licznika w ReactJS'} classValue='main-heading' />
      </header>
      <Counter />
    </div>
  );
}

export default App;
