// Passing Props to Components
// Description: Create a Profile component that receives name and age as props and displays them.

// Step 1: Write your code within the file, by the name of component as Profile
// Step 2: Update App.js to pass props to the Profile component
import React from 'react';
import PropTypes from 'prop-types';

function Profile(props) {
  const { name, age } = props;
  
  return (
    <div className="profile">
      <h2>Name: {name}</h2>
      {age !== null && <p>Age: {age}</p>}
    </div>
  );
}

// Prop type validation
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};

// Default props
Profile.defaultProps = {
  name: 'Unnamed',
  age: null
};

export default Profile;
