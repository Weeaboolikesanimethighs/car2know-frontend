import React, { useState } from 'react';
import TaskButton from './sidecomponents/TaskButton';
import CarForm from './sidecomponents/CarForm';

const AddCarButton = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleClick = () => {
    setIsFormVisible(true);
  };

  const handleFormSubmit = (carDetails) => {
    console.log('Submitted car details:', carDetails);
    setIsFormVisible(false);
  };

  const handleFormCancel = () => {
    setIsFormVisible(false);
  };

  return (
    <div>
      <TaskButton onClick={handleClick} label="Termin ausmachen" />
      {isFormVisible && (
        <CarForm onSubmit={handleFormSubmit} onCancel={handleFormCancel} />
      )}
    </div>
  );
};

export default AddCarButton;
