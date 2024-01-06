import React from 'react';
import AddCarButton from '../components/AddCarButton';
import CookieConsent from "react-cookie-consent";

const Home = () => {
  return (
    <div>
      <h1>Car2Know 🚗</h1>
      <AddCarButton/>

      <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
    </div>
  );
};

export default Home;