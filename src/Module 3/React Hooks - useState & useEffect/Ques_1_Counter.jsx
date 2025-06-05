// Counter
// 1. Goal: Create a simple counter that increments by one each time a button is clicked.
// 2. Steps:
//     - Initialize a state variable count with an initial value of 0 using useState .
//     - Create a button with an onClick event that increases count by 1.
//     - Display the current count value.
//     - Write your code within the file, by the name of component as Counter
import React, { useState } from 'react';

const Counter = () => {
  // Initialize state with a count of 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter: {count}</h2>
      <button 
        onClick={incrementCount}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;

