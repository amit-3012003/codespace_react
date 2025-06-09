// Simple Form Submission
// Description: Create a simple form with a name input field and a submit button. Display an alert with the name when the form is submitted.

// Steps:
//     - onSubmit: Calls handleSubmit , which prevents the default form submission action and shows an alert.
//     - Write your code within the file, by the name of component as Simple_Form
import React, { useState } from 'react';

const SimpleForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim()) {
      alert(`Form submitted with name: ${name}`);
      setName(''); // Optional: Clear the input after submission
    } else {
      alert('Please enter a name before submitting');
    }
  };

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '400px', 
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ color: '#333' }}>Simple Form Submission</h2>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        <div>
          <label htmlFor="nameInput" style={{
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold'
          }}>
            Enter Your Name:
          </label>
          <input
            type="text"
            id="nameInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: '8px',
              width: '100%',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px'
            }}
            placeholder="Type your name here"
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '10px 15px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s',
            ':hover': {
              backgroundColor: '#45a049'
            }
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;