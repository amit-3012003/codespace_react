// Timeout Counter using useEffect
// Description: Create a counter that increments by one every second using the useEffect hook.

// Steps to needed:
//     - setInterval : Repeatedly increments the count every 1 second.
//     - clearInterval(timer) : Clears the timer when component unmounts to prevent memory leaks.
//     - Write your code within the file, by the name of component as Timeout_Counter
import React, { useState, useEffect } from 'react';

const TimeoutCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Set up the interval when component mounts
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Update every 1000ms (1 second)

    // Clean up the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div style={{ 
      textAlign: 'center',
      marginTop: '50px',
      fontSize: '24px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2>Auto-Incrementing Counter</h2>
      <p>Count: <strong>{count}</strong></p>
      <small>Increments every second</small>
    </div>
  );
};

export default TimeoutCounter;
