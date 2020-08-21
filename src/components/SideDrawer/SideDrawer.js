import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => (
  <nav className="side-drawer">
    <ul>
      <li><a href="/">Projects</a></li>
      <li><a href="/">Resume</a></li>
      <li><a href="/">About Me</a></li>
      <li><a href="/">Music</a></li>
    </ul>
  </nav>
);

export default sideDrawer;