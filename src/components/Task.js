import React from "react";
import { useState } from "react";
import Status from "./sidecomponents/Status";

let taskObject = {
  firstname: "Mirac",
  lastname: "Fidanci",
  status: "Completed",
};

// Parameter sollte hier ein Objekt sein, das alle Daten enthält, die man braucht
/*
const Task = ({ onClick, firstname, lastname, status }) => {
  return (
    <button
      onClick={onClick}
      className="w-10/12 border-2 p-3.5 mb-3 bg-gray-50 rounded-2xl border-gray-300 hover:bg-gray-100 flex items-center"
    >
      <Status status={status} />
      <p className="px-2">
        {firstname} {lastname}
      </p>
    </button>
  );
};
*/

const Task = ({ onClick, person }) => {
  return (
    <button
      onClick={onClick}
      className="w-10/12 border-2 p-3.5 mb-3 bg-gray-50 rounded-2xl border-gray-300 hover:bg-gray-100 flex items-center"
    >
      <Status status={person.status} />
      <p className="px-2">
        {person.firstname} {person.lastname}
      </p>
    </button>
  );
};

export default Task;
