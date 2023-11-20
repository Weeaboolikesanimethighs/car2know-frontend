import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-white h-screen w-16 fixed border border-gray-500">
      <div className="p-4">
        <Link to="/">
          <img src="/Logo_notext.png" alt="Logo" className="w-full cursor-pointer" />
        </Link>      
        </div>
        <div className="p-4">
        <Link to="/user" className="icon-link cursor-pointer">
          <FontAwesomeIcon
            icon={faUser}
            className="icon text-gray-300 border border-2 border-gray-300 p-2 rounded mb-2"
          />
        </Link>
        <Link to="/login" className="icon-link cursor-pointer">
          <FontAwesomeIcon
            icon={faRightToBracket}
            className="icon text-gray-300 border border-2 border-gray-300 p-2 rounded mb-2"
          />
        </Link>
        <Link to="/contact" className="icon-link cursor-pointer">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="icon text-gray-300 border border-2 border-gray-300 p-2 rounded mb-2"
          />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
