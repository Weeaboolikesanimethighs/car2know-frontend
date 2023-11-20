import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <aside className="bg-white h-screen w-16 fixed border border-gray-500">
      <div className="p-4">
        <img src="/Logo_notext.png" alt="Logo" className="w-full" />
      </div>
      <div className="p-4">
        <a href="#" className="icon-link cursor-pointer">
          <FontAwesomeIcon
            icon={faHome}
            className="icon text-gray-300 border border-2 border-gray-300 p-2 rounded mb-2"
          />
        </a>
        <a href="#" className="icon-link cursor-pointer">
          <FontAwesomeIcon
            icon={faUser}
            className="icon text-gray-300 border border-2 border-gray-300 p-2 rounded mb-2"
          />
        </a>
        <a href="#" className="icon-link cursor-pointer">
           <FontAwesomeIcon
            icon={faHome}
            className="icon text-gray-300 border border-2 border-gray-300 p-2 rounded mb-2"
        />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
