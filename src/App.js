import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import User from './pages/User';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import AdminPage from "./pages/AdminPage";
import { AuthProvider } from './contexts/AuthContext';


const App = () => {
  return (
    <Router>
      <AuthProvider> {/* Wrap your app with AuthProvider */}
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex flex-col flex-grow ml-16">
            <main className="p-4 flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<User />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/impressum" element={<Impressum />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
