import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Adjust the import path for Sidebar
import Footer from './components/Footer'; // Füge den Import für StickyFooter hinzu
import Home from './pages/Home'; 
import User from './pages/User';
import Contact from './pages/Contact';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen flex">
        <Sidebar />
        <div className="flex flex-col flex-grow ml-16">
          <main className="p-4 flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user" element={<User />} />
              <Route path="/login" element={<Login />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
