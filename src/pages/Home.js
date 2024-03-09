import React from 'react';
import AddCarButton from '../components/AddCarButton';
import CookieConsent from "react-cookie-consent";

const Home = () => {
  return (
    <div className='text-center text-lg'>
      <h2 className="font-bold text-3xl">Car2Know</h2>
      <p>Car2Know ist die Webseite um Termine beim Mechaniker auszumachen ohne anzurufen</p>
      <br/>
      <p>Schritt 1: Drücken Sie auf den Termin ausmachen Knopf</p>
      <br/>
      <p>Schritt 2: Füllen Sie das Formular aus und wählen Sie ihr gewünschten Termin</p>
      <br/>
      <p>Schritt 3: Warten Sie auf die Bestätigungsmail</p>
      <br/>

      <p>Nachdem Sie das Auto abgeliefert haben werden Sie per Mail und über die Webseite den aktuellen Zustand ihres Autos nachschauen</p>
      <br/>

      <AddCarButton/>

      <CookieConsent>Diese Seite benötigt Cookies um optimal zu laufen.</CookieConsent>
    </div>
  );
};

export default Home;