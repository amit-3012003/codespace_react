// Conditional Rendering
// Description: Implement a component that renders different messages based on a passed isLoggedIn prop.

// Step 1: Write your code within the file, by the name of component as LoginMessage
// Step 2: Modify the App.js to use LoginMessage with a boolean prop

import React from 'react';
import PropTypes from 'prop-types';

function AuthMessage({ isLoggedIn }) {
  return (
    <div className="auth-message">
      {isLoggedIn ? (
        <h2>Welcome back! You are now logged in.</h2>
      ) : (
        <h2>Please log in to access your account.</h2>
      )}
    </div>
  );
}

// Prop type validation
AuthMessage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

// Default props (optional)
AuthMessage.defaultProps = {
  isLoggedIn: false
};

export default AuthMessage;