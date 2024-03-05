import React, { useState } from 'react';
import Kalender from './Kalender';

const CarForm = ({ onSubmit, onCancel }) => {
  const [carDetails, setCarDetails] = useState({
    vorname: '',
    nachname: '',
    email: '',
    telefonnummer: '',
    kennzeichen: '',
    hersteller: '',
    model: '',
    jahr: '',
    bemerkungen: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(carDetails);
  };
  const handleDateChange = (date) => {
    setCarDetails((prevDetails) => ({
      ...prevDetails,
      selectedDate: date,
    }));
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-8 rounded shadow-md">
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-black text-m font-bold mb-2" htmlFor="vorname">
            Vorname:
          </label>
          <input
            type="text"
            name="vorname"
            value={carDetails.vorname}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:border-green-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-m font-bold mb-2" htmlFor="nachname">
            Nachname:
          </label>
          <input
            type="text"
            name="nachname"
            value={carDetails.nachname}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:border-green-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-m font-bold mb-2" htmlFor="email">
            E-Mail:
          </label>
          <input
            type="text"
            name="email"
            value={carDetails.email}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:border-green-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-m font-bold mb-2" htmlFor="telefonnummer">
            Telefonnummer:
          </label>
          <input
            type="text"
            name="telefonnummer"
            value={carDetails.telefonnummer}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:border-green-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-m font-bold mb-2" htmlFor="kennzeichen">
            Kennzeichen:
          </label>
          <input
            type="text"
            name="kennzeichen"
            value={carDetails.kennzeichen}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:border-green-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-m font-bold mb-2" htmlFor="hersteller">
            Hersteller:
          </label>
          <input
            type="text"
            name="hersteller"
            value={carDetails.hersteller}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:border-green-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-m font-bold mb-2" htmlFor="model">
            Model:
          </label>
          <input
            type="text"
            name="model"
            value={carDetails.model}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:border-green-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-m font-bold mb-2" htmlFor="jahr">
            Baujahr:
          </label>
          <input
            type="text"
            name="jahr"
            value={carDetails.jahr}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:border-green-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-m font-bold mb-2" htmlFor="bemerkungen">
            Sonstige Bemerkungen:
          </label>
          <textarea
            type="text"
            name="bemerkungen"
            value={carDetails.bemerkungen}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:border-green-500 h-20"
            style={{ resize: "none" }}
          />
        </div>
        {/* Add more input fields for other details */}
        <div className="mb-4 col-span-2">
          <label className="block text-black text-m font-bold mb-2" htmlFor="selectedDate">
            Datum auswählen:
          </label>
          <Kalender selectedDate={carDetails.selectedDate} onChange={handleDateChange} />
          {carDetails.selectedDate && (
            <div className="mt-2">
              Ausgewähltes Datum: {carDetails.selectedDate.toLocaleDateString()}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600 focus:outline-none"
        >
          Akzeptieren
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-red-500 text-white p-2 rounded ml-2 hover:bg-red-600 focus:outline-none"
        >
          Abbrechen
        </button>
      </form>
    </div>
  );
};

export default CarForm;
