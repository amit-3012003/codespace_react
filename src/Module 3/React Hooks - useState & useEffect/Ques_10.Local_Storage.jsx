// Local Storage with useEffect and useState
// Description: Create a component where the user's input is saved in local storage and persists after page reload.

// Steps to needed:
//     - useState(() => {...}) : Initializes the input with local storage value.
//     - useEffect([input]) : Updates local storage each time input changes.
//     - Write your code within the file, by the name of component as Local_Storage.
import React, { useState, useEffect } from 'react';

function LocalStorageInput() {
  // Get stored value from local storage or default to an empty string
  const [inputValue, setInputValue] = useState(() => {
    return localStorage.getItem('userInput') || '';
  });

  // Save inputValue to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('userInput', inputValue);
  }, [inputValue]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Persistent Input</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: '10px', width: '300px' }}
      />
      <p>Value saved in local storage: {inputValue}</p>
    </div>
  );
}

export default LocalStorageInput;
