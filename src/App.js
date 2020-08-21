import React from 'react';
import Toolbar from './components/Toolbar/Toolbar';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <main>
        <p style={{marginTop: '64px'}}>
          This is the page content!
        </p>
      </main>
    </div>
  );
}

export default App;
