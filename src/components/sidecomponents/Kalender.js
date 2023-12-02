// components/Kalender.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Kalender = ({ selectedDate, onChange }) => {
  const [startDate, setStartDate] = useState(selectedDate || new Date());

  // Berechne das Datum, das maximal 3 Monate in der Zukunft liegt
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        // Überprüfe, ob das ausgewählte Datum in den nächsten 3 Monaten liegt
        if (date <= maxDate) {
          setStartDate(date);
          onChange(date);
        }
      }}
      maxDate={maxDate}
      minDate={new Date()} // Setze minDate auf das aktuelle Datum, um keine vergangenen Termine zuzulassen
      showYearDropdown
      scrollableYearDropdown
      dateFormat="dd/MM/yyyy" // Setze das gewünschte Datumformat
    />
  );
};

export default Kalender;
