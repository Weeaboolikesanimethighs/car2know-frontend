import React from 'react';

const TaskButton = ({ onClick, label }) => {
  return (
    <button
      className="bg-orange-400 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TaskButton;
