import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';  // Add this import

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/project" element={<Projects />} />  {/* Add this route */}
      </Routes>
    </Router>
  );
};

export default App;