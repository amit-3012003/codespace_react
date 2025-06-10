// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SubPage from './components/SubPage';

function App() {
  return (
    <Router>
      {/* 1. Navigation Bar (New Addition) */}
      <NavBar />
      
      {/* 2. Main Content Area */}
      <main className="app-content">
        <Routes>
          {/* 3. Default Route */}
          <Route path="/" element={<Home />} />
          
          {/* 4. About Route with Nested Subpage (Existing Feature) */}
          <Route path="/about" element={<About />}>
            <Route path="subpage" element={<SubPage />} />
          </Route>
          
          {/* 5. Contact Route (Existing Feature) */}
          <Route path="/contact" element={<Contact />} />
          
          {/* 6. Catch-all Route (Existing Feature) */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      
      {/* 7. Optional Footer can go here */}
    </Router>
  );
}

export default App;