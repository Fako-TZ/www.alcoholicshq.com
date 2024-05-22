import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import DiscordPage from './components/DiscordPage';
import ComingSoonPage from './components/ComingSoonPage'; // Import the ComingSoonPage component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/discord" element={<DiscordPage />} />
          <Route path="/Helpers" element={<ComingSoonPage />} /> {/* Define route for the Coming Soon page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
