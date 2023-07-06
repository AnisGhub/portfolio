import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Projects from './pages/Projects';
import About from './pages/AboutMe';
import Project from './pages/Project';
import ScrollToTop from './components/ScrollToTop';
import Toast from './components/Toast';

function App() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleCloseToast = () => {
    setShowToast(false);
  };
  return (
    <BrowserRouter>
      <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
        {!showToast && <ScrollToTop />}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/project/:id" element={<Project />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {showToast && <Toast onClose={handleCloseToast} />}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
