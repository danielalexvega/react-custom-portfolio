import React from 'react';
import './SideDrawer.css';


const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if(props.show) {
    drawerClasses = 'side-drawer open';
  }
  return(<nav className={drawerClasses}>
    <ul>
      <li><a href="/">Projects</a></li>
      <li><a href="/">Resume</a></li>
      <li><a href="/">About Me</a></li>
      <li><a href="/">Music</a></li>
    </ul>
  </nav>);
};

export default sideDrawer;