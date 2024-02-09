// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); // New state for admin role

  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    const storedUsername = localStorage.getItem('username');
    const storedIsAdmin = localStorage.getItem('isAdmin'); // Retrieve isAdmin from localStorage

    if (storedAuth && storedUsername) {
      setIsAuthenticated(JSON.parse(storedAuth));
      setUsername(storedUsername);
      setIsAdmin(JSON.parse(storedIsAdmin)); // Set isAdmin from localStorage
    }
  }, []);

  const login = (user, isAdmin) => {
    setIsAuthenticated(true);
    setUsername(user);
    if(user === "admin"){
      setIsAdmin(true);
    }

    localStorage.setItem('auth', JSON.stringify(true));
    localStorage.setItem('username', user);
    localStorage.setItem('isAdmin', JSON.stringify(isAdmin)); // Store isAdmin in localStorage
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setIsAdmin(false); // Reset isAdmin when logging out

    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    localStorage.removeItem('isAdmin'); // Remove isAdmin from localStorage
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, isAdmin, login, logout,  }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
