import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PodcasterPage from './pages/PodcasterPage';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcaster/:id" element={<PodcasterPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;