javascript
Copy code
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/add-reminder">Add Reminder</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
