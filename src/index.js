import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated ReactDOM for React 18+
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
