/* import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout();
    navigate('/'); 
  };

  return (
<button 
  className="bg-orange-400 text-white p-1 rounded w-24 h-10 hover:bg-orange-500 focus:outline-none text-m"
  onClick={handleLogout}>
    Logout
</button>

  );
};

export default LogoutButton;
 */