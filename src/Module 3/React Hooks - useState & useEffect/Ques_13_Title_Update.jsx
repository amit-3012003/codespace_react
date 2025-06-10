// Document Title Update

// 1. Goal: Change the document title to reflect the number of button clicks.
// 2. Steps:
//     - Initialize a count state using useState .
//     - Use useEffect to update the document title whenever the count changes.
//     - Create a button to increase the count and see the document title change.
//     - Write your code within the file, by the name of component as Title_Update
import React, { useState, useEffect } from 'react';

function TitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Click Counter</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} style={{ padding: '9px 15px' }}>
        Click Me
      </button>
    </div>
  );
}

export default TitleUpdater;
