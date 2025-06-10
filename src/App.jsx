// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      {/* Optional: a simple nav */}
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          {/* When path is exactly “/” render <Home /> */}
          <Route path="/" element={<Home />} />

          {/* When path is “/about” render <About /> */}
          <Route path="/about" element={<About />} />

          {/* When path is “/contact” render <Contact /> */}
          <Route path="/contact" element={<Contact />} />

          {/* Optional: catch-all “Not Found” */}
          <Route
            path="*"
            element={<h2>404: Page Not Found</h2>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
