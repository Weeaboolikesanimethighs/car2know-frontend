import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {useEffect} from 'react';

const LoginWindow = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/;
  
    if (username.trim() === '' || password.trim() === '') {
      setLoginStatus('Bitte beide Felder ausfüllen');

    } else if (!passwordRegex.test(password)) {
      setLoginStatus('Das Passwort ist falsch');
    
    } else if(username === "admin"){
      setLoginStatus('');
      login(username)
      navigate('/admin', { state: { username } });
    }
    
    else {
      console.log('Login successful!');
      setLoginStatus('');
      navigate('/user', { state: { username } });
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-gray p-8 rounded border border-gray-300 shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-black">Login</h2>
        <div className="mb-4">
          <label className="block text-black text-m font-bold mb-2" htmlFor="username">
            Benutzername
          </label>
          <input
            type="text"
            id="username"
            className="w-full p-2 border rounded focus:outline-none focus:border-green-500"
            placeholder="Benutzername"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-m font-bold mb-2" htmlFor="password">
            Passwort
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded focus:outline-none focus:border-green-500"
            placeholder="Passwort"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-orange-400 text-white p-2 rounded w-full hover:bg-orange-500 focus:outline-none"
          onClick={handleLogin}
        >
          Anmelden
        </button>
        {loginStatus && (
          <p className="text-red-500 text-sm mt-2">{loginStatus}</p>
        )}
      </div>
    </div>
  );
};

export default LoginWindow;
