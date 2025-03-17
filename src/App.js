import React from 'react';
import Navbar from './components/Navbar'; // Import Navbar
import { Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate for redirection
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Design from './pages/Design';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div>
      <Navbar /> {/* Include Navbar */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} /> {/* Redirect default route to Home */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/design" element={<Design />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
