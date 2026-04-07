import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Abuja from './pages/Abuja';
import Kano from './pages/Kano';
import Kaduna from './pages/Kaduna';
import Team from './pages/Team';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/abuja" element={<Abuja />} />
          <Route path="/kano" element={<Kano />} />
          <Route path="/kaduna" element={<Kaduna />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;