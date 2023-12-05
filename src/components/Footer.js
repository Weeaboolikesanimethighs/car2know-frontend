import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 fixed bottom-0 w-full">
      {/* Your footer content goes here */}
      <div className="container mx-auto">
        <p className="text-center">© 2023 KFZ Sarp</p>
        <p className="text-center">
        <a href="/impressum" className="text-gray-300 hover:text-white">
          Impressum
        </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
