import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Adjust the import path for Sidebar
import Home from './pages/Home'; 
import User from './pages/User';
import Contact from './pages/Contact';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />

        <main className="ml-16 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
