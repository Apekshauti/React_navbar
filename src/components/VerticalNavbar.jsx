// VerticalNavbar.js

import React from 'react';
import './VerticalNavbar.css';

const VerticalNavbar = () => {
  return (
    <div className="vertical-navbar">
      <div className="navbar-header">
        <h2>LOGO</h2>
      </div>
      <nav className="navbar-links">
        <a href="#">Dashboard</a>
        <a href="#">Event Page</a>
        <a href="#">Event Organizing</a>
        <a href="#">Event Participation</a>
      </nav>
    </div>
  );
};

export default VerticalNavbar;
