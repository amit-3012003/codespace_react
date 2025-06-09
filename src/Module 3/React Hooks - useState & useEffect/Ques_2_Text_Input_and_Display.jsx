// Text Input and Display
// Description: Create a React component that allows users to input text in a textbox and displays the input below the textbox.

// Steps:
//     - Write your code within the file, by the name of component as Text_Input
import React, { useState } from 'react';

const TextInputAndDisplay = () => {
  // State to store the input text
  const [inputText, setInputText] = useState('');

  // Handler for input changes
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Text Input Display</h2>
      
      {/* Text input field */}
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type something..."
        style={styles.input}
      />
      
      {/* Display area for the input text */}
      <div style={styles.displayArea}>
        <h3>Your Input:</h3>
        <p style={styles.displayText}>{inputText || 'Nothing entered yet...'}</p>
      </div>
    </div>
  );
};

// Styling object
const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '19px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    color: '#333',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  displayArea: {
    marginTop: '20px',
    padding: '15px',
    backgroundColor: '#f5f5f5',
    borderRadius: '4px',
  },
  displayText: {
    fontSize: '18px',
    color: '#333',
    wordWrap: 'break-word',
  },
};

export default TextInputAndDisplay;