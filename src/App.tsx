import React from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-secondary text-primary font-sans">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;