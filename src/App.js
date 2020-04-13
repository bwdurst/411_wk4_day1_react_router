import React from 'react';
import Navigation from './components/Navigation'
import './App.css'
// Write imports for Router & BrowserRouter here //
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
  );
}

export default App;
