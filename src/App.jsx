javascript
Copy code
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddReminder from './pages/AddReminder';
import Navbar from './components/Navbar';
import './styles/main.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-reminder" element={<AddReminder />} />
      </Routes>
    </Router>
  );
};

export default App;
