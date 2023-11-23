import React from "react";

const Task = ({ status }) => {
  const borderClass =
    status === "aktiv" ? "border-green-500" : "border-red-500";

  return (
    <div className={`border-2 ${borderClass} p-4 rounded-md`}>
      <p className="text-lg font-bold">
        Status: {status === "aktiv" ? "Aktiv" : "Inaktiv"}
      </p>
    </div>
  );
};

export default Task;
