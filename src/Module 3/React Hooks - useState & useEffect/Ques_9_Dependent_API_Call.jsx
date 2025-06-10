// Dependent API Calls with useEffect
// Description: Create a component that displays a list of users. When a user is clicked, fetch and display their posts.

// Steps to needed:
//     - First useEffect : Fetches the user list.
//     - Second useEffect([selectedUserId]) : Fetches posts when a user is selected.
//     - Write your code within the file, by the name of component as Dependent_API_Call
import React, { useState, useEffect } from 'react';

const DependentAPICalls = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Failed to fetch users');
        setUsers(await response.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Fetch posts when selectedUserId changes
  useEffect(() => {
    if (!selectedUserId) return;

    const fetchPosts = async () => {
      try {
        setLoading(true);
        setPosts([]); // Clear previous posts
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`
        );
        if (!response.ok) throw new Error('Failed to fetch posts');
        setPosts(await response.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [selectedUserId]);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2>Users and Posts</h2>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Users List */}
        <div style={{ flex: 1 }}>
          <h3>Users</h3>
          {loading && !selectedUserId ? (
            <p>Loading users...</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {users.map(user => (
                <li 
                  key={user.id}
                  onClick={() => setSelectedUserId(user.id)}
                  style={{
                    padding: '10px',
                    margin: '5px 0',
                    backgroundColor: selectedUserId === user.id ? '#f0f0f0' : 'transparent',
                    cursor: 'pointer',
                    borderRadius: '4px'
                  }}
                >
                  {user.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Posts List */}
        <div style={{ flex: 2 }}>
          <h3>Posts</h3>
          {loading && selectedUserId ? (
            <p>Loading posts...</p>
          ) : posts.length > 0 ? (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {posts.map(post => (
                <li key={post.id} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #eee' }}>
                  <h4>{post.title}</h4>
                  <p>{post.body}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>{selectedUserId ? 'No posts found' : 'Select a user to view posts'}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DependentAPICalls;