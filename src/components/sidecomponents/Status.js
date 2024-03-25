import React from "react";
const Status = ({ status }) => {
  // Parameter fuer Status
  const Status = {
    Completed: "Completed",
    InProgress: "In Progress",
    NotStarted: "Not Started",
  };

  switch (status) {
    case Status.Completed:
      return (
        <div className="w-fit bg-green-50 ring-green-600/20 text-green-700 ring-1 ring-inset rounded-3xl flex items-center">
          <div className="h-3 w-3 bg-green-600 rounded-full mx-2"></div>
          <p className="pr-3">Completed</p>
        </div>
      );
    case Status.InProgress:
      return (
        <div className="w-fit bg-yellow-50 ring-yellow-600/20 text-yellow-800 ring-1 ring-inset rounded-3xl flex items-center">
          <div className="h-3 w-3 bg-yellow-500 rounded-full mx-2"></div>
          <p className="pr-3">In Progress</p>
        </div>
      );
    case Status.NotStarted:
      return (
        <div className="w-fit bg-red-50 ring-red-600/20 text-red-700 ring-1 ring-inset rounded-3xl flex items-center">
          <div className="h-3 w-3 bg-red-500 rounded-full mx-2"></div>
          <p className="pr-3">Not Started</p>
        </div>
      );

    default:
      return null;
  }
};

export default Status;
