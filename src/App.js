import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/layout/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
