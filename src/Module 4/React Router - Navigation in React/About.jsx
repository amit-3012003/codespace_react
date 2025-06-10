// src/components/About.jsx
import { Link, Outlet } from 'react-router-dom';

function About() {
  return (
    <div className="about-page">
      <h2>About Us</h2>
      <nav className="about-subnav">
        <Link to="subpage">View Subpage</Link>
        {/* Add more sub-navigation links as needed */}
      </nav>
      
      {/* This Outlet will render the SubPage component when on /about/subpage */}
      <Outlet />
      
      {/* Default about page content */}
      <div className="about-content">
        <p>Welcome to our company's about page. Here you can learn more about us.</p>
      </div>
    </div>
  );
}

export default About;