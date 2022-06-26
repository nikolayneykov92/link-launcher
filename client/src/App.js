import React from 'react';
import LinkList from './LinkList';
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Link Launcher</h1>
      </header>
      <LinkList />
    </div>
  );
}

export default App;
