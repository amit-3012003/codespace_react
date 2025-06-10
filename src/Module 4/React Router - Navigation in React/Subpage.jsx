// src/components/SubPage.jsx
import { Link } from 'react-router-dom';

function SubPage() {
  return (
    <div className="subpage">
      <h3>About Subpage</h3>
      <p>This is additional detailed information that appears when you visit /about/subpage</p>
      <Link to="/about">Back to main About page</Link>
    </div>
  );
}

export default SubPage;