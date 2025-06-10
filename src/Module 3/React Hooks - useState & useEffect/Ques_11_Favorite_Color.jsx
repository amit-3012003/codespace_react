// Favorite Color

// 1. Goal: Allow users to input and display their favorite color.
// 2. Steps:
//     - Create a state variable favoriteColor with an initial value of an empty string.
//     - Implement an input field to update favoriteColor using onChange .
//     - Display the value of favoriteColor below the input field.
//     - Write your code within the file, by the name of component as Timeout_Counter
import React, { useState } from 'react';

function FavoriteColor() {
  const [color, setColor] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFavoriteColor(color);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>What's Your Favorite Color?</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your favorite color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{ padding: '8px', width: '250px' }}
        />
        <button type="submit" style={{ marginLeft: '10px', padding: '8px 11px' }}>
          Submit
        </button>
      </form>

      {favoriteColor && (
        <p style={{ marginTop: '20px', color: favoriteColor }}>
          Your favorite color is: <strong>{favoriteColor}</strong>
        </p>
      )}
    </div>
  );
}

export default FavoriteColor;
