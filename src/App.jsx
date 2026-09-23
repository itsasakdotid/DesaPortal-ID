import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Halaman lainnya akan ditambahkan nanti */}
          </Routes>
        </main>
        {/* Footer akan ditambahkan nanti */}
      </div>
    </Router>
  );
}

export default App;
