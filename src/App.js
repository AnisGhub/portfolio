import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Projects from './pages/Projects';
import About from './pages/AboutMe';
import Project from './pages/Project';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/project/:id" element={<Project />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
