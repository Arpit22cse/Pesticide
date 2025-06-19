import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import AllServicesPage from './pages/AllServicesPage';

function App() {
  return (
    <div className="min-h-screen bg-secondary text-primary font-sans">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<AllServicesPage />} />
        {/* Add more routes here */}
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;