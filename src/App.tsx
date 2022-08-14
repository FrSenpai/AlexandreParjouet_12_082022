import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Profile } from './pages/Profil';
import { BrowserRouter } from 'react-router-dom';
import HorizontalBar from './components/layouts/horizontalBar/HorizontalBar';
import { Navigation } from './components/layouts/navigation/Navigation';

function App() {
  
  return (
    <BrowserRouter>
      <section className="mainCtn">
        <header>
          <HorizontalBar></HorizontalBar>
        </header>
        <Navigation/>
      </section>
    </BrowserRouter>
  );
}

export default App;
