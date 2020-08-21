import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton />
      </div>
      <div className="toolbar_logo"><a href="/">The Logo</a></div>
      <div className="spacer"></div>
      <div className="toolbar_navigation-items">
        <ul>
          <li><a href="/">Projects</a></li>
          <li><a href="/">Resume</a></li>
          <li><a href="/">About Me</a></li>
          <li><a href="/">Music</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;