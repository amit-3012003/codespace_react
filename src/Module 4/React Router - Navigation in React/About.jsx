// src/components/About.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <Link to="subpage">Go to SubPage</Link>
      <Outlet /> {/* This is where nested route will render */}
    </div>
  );
}

export default About;
