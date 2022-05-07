// import logo from './logo.svg';
import './App.css';
import React,  {useState} from 'react';

function App() {
  const [count, setCount] = useState  ('')

  function decrementCount() {
    setCount(prevCount => (prevCount - 1))
  }

  function incrementCount() {
    setCount (newCount => (newCount + 1))
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
        <span>{ count }</span>
      <button onclick={incrementCount}>+</button>
    </div>
  );
}

export default App;
