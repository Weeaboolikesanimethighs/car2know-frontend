import React from "react";
import Task from "../components/Task";

const User = () => {
  return (
    <div>
      <Task status="Completed" name="Mirac Fidanci" />
      <Task status="In Progress" name="Fikri Öksum" />
      <Task status="Not Started" name="Gabriel Montemayor" />
    </div>
  );
};

export default User;
