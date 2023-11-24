import React from "react";

const Task = ({ status, name }) => {
  const Status = status;
  const Name = name;
  switch (Status) {
    case "Completed":
      return (
        <div className="w-5/12 border-2 p-3.5 mb-3 bg-gray-50 rounded-3xl border-gray-300 flex items-center">
          <div className="w-fit bg-green-200 rounded-3xl flex items-center">
            <div className="h-3 w-3 bg-green-500 rounded-full mx-2"></div>
            <p className="pr-3">Completed</p>
          </div>
          <p class="px-2">{Name}</p>
        </div>
      );
    case "In Progress":
      return (
        <div className="w-5/12 border-2 p-3.5 mb-3 bg-gray-50 rounded-3xl border-gray-300 flex items-center">
          <div className="w-fit bg-yellow-200 rounded-3xl flex items-center">
            <div className="h-3 w-3 bg-yellow-500 rounded-full mx-2"></div>
            <p className="pr-3">In Progress</p>
          </div>
          <p class="px-2">{Name}</p>
        </div>
      );
    case "Not Started":
      return (
        <div className="w-5/12 border-2 p-3.5 mb-3 bg-gray-50 rounded-3xl border-gray-300 flex items-center">
          <div className="w-fit bg-red-200 rounded-3xl flex items-center">
            <div className="h-3 w-3 bg-red-500 rounded-full mx-2"></div>
            <p className="pr-3">Not Started</p>
          </div>
          <p class="px-2">{Name}</p>
        </div>
      );
  }
};

export default Task;
