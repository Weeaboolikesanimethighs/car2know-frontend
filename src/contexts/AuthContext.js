// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    const storedUsername = localStorage.getItem('username');

    if (storedAuth && storedUsername) {
      setIsAuthenticated(JSON.parse(storedAuth));
      setUsername(storedUsername);
    }
  }, []);

  const login = (user) => {
    setIsAuthenticated(true);
    setUsername(user);

    localStorage.setItem('auth', JSON.stringify(true));
    localStorage.setItem('username', user); // Save the username in localStorage
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsername('');

    localStorage.removeItem('auth');
    localStorage.removeItem('username');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
