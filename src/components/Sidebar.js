import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Adjust the path based on your project structure

const Sidebar = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleUserIconClick = () => {
    if (isAuthenticated) {
      // If the user is authenticated, navigate to the user page
      navigate('/user');
    } else {
      // If the user is not authenticated, navigate to the login page
      navigate('/login');
    }
  };

  return (
    <aside className="bg-white h-screen w-16 fixed border border-gray-500 z-20">
      <div className="p-4">
        <Link to="/">
          <img src="/Logo_notext.png" alt="Logo" className="w-full cursor-pointer" />
        </Link>
      </div>
      <div className="p-4">
        <div onClick={handleUserIconClick} className="icon-link cursor-pointer">
          <FontAwesomeIcon
            icon={faUser}
            className="icon text-gray-500  border-2 border-gray-300 p-2 rounded mb-2"
          />
        </div>
        <Link to="/login" className="icon-link cursor-pointer">
          <FontAwesomeIcon
            icon={faRightToBracket}
            className="icon text-gray-500  border-2 border-gray-300 p-2 rounded mb-2"
          />
        </Link>
        <Link to="/contact" className="icon-link cursor-pointer">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="icon text-gray-500  border-2 border-gray-300 p-2 rounded mb-2"
          />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
