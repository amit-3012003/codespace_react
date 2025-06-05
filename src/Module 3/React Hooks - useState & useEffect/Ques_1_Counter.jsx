// Counter
// 1. Goal: Create a simple counter that increments by one each time a button is clicked.
// 2. Steps:
//     - Initialize a state variable count with an initial value of 0 using useState .
//     - Create a button with an onClick event that increases count by 1.
//     - Display the current count value.
//     - Write your code within the file, by the name of component as Counter
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = (amount) => {
    setCount(prevCount => prevCount + amount);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => incrementCount(1)}>+1</button>
      <button onClick={() => incrementCount(5)}>+5</button>
      <button onClick={() => incrementCount(10)}>+10</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;

