import React from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';

function App() {
  return (
    <div className="App" style={{height: '100%'}}>
      <Toolbar />
      <SideDrawer />
      <main>
        <p style={{marginTop: '64px'}}>
          This is the page content!
        </p>
      </main>
    </div>
  );
}

export default App;
