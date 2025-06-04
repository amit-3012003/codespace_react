// Embedding JavaScript Expressions in JSX
// Description: Embed a JavaScript expression in JSX to display the current year.
// Use this component in App.js
import React from "react";

function Ques_2() {
  const currentYea = new Date().getFullYear();

  return (
    <div>
      <p>The current year is {currentYea}</p>
    </div>
  );
}

export default Ques_2;


