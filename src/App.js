import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tarot Reading</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
