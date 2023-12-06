import React from "react";
import { useState } from "react";

// Parameter sollte hier ein Objekt sein, das alle Daten enthält, die man brauchst
const Task = ({ onClick, firstname, lastname, status }) => {
  let task = {
    firstname: firstname,
    lastname: lastname,
    status: status,
  };
  switch (status) {
    case "Completed":
      return (
        <button
          onClick={onClick}
          className="w-10/12 border-2 p-3.5 mb-3 bg-gray-50 rounded-2xl border-gray-300 hover:bg-gray-100 flex items-center"
        >
          <div className="w-fit bg-green-50 ring-green-600/20 text-green-700 ring-1 ring-inset rounded-3xl flex items-center">
            <div className="h-3 w-3 bg-green-500 rounded-full mx-2"></div>
            <p className="pr-3">Completed</p>
          </div>
          <p className="px-2">
            {task.firstname} {task.lastname}
          </p>
        </button>
      );
    case "In Progress":
      return (
        <button
          onClick={onClick}
          className="w-10/12 border-2 p-3.5 mb-3 bg-gray-50 rounded-2xl border-gray-300 hover:bg-gray-100 flex items-center"
        >
          <div className="w-fit bg-yellow-50 ring-yellow-600/20 text-yellow-800 ring-1 ring-inset rounded-3xl flex items-center">
            <div className="h-3 w-3 bg-yellow-500 rounded-full mx-2"></div>
            <p className="pr-3">In Progress</p>
          </div>
          <p className="px-2">
            {task.firstname} {task.lastname}
          </p>
        </button>
      );
    case "Not Started":
      return (
        <button
          onClick={onClick}
          className="w-10/12 border-2 p-3.5 mb-3 bg-gray-50 rounded-2xl border-gray-300 hover:bg-gray-100 flex items-center"
        >
          <div className="w-fit bg-red-50 ring-red-600/10 text-red-700 ring-1 ring-inset rounded-3xl flex items-center">
            <div className="h-3 w-3 bg-red-500 rounded-full mx-2"></div>
            <p className="pr-3">Not Started</p>
          </div>
          <p className="px-2">
            {task.firstname} {task.lastname}
          </p>
        </button>
      );
  }
};

export default Task;
