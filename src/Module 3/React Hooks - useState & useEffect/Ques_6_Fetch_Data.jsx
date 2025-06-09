// Fetch Data with useEffect
// Description: Create a component that fetches data from an API and displays it in a list using the useEffect hook.

// Steps:
//     - Write your code within the file, by the name of component as Fetch_Data
import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Using JSONPlaceholder API as an example
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const jsonData = await response.json();
        setData(jsonData.slice(0, 10)); // Limiting to 10 items for display
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return <div>Loading data..</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Fetched Data</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
