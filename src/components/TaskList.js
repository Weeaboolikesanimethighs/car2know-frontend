import React from "react";
import { useState } from "react";
import Task from "./Task";

const TaskList = ({ tasks, onClick }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task onClick={() => onClick(task)} person={task} />
      ))}
    </div>
  );
};

export default TaskList;
