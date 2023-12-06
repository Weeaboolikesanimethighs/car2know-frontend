import React from "react";
import Task from "../components/Task";
//import LogoutButton from '../components/LogoutButton'; // Import the LogoutButton component
import Details from "../components/Details";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

const User = () => {
  const { username, isAuthenticated } = useAuth();

  const [isWindowVisible, setIsWindowVisible] = useState(false);
  function handleClick() {
    setIsWindowVisible(!isWindowVisible);
  }

  return (
    <div className="grid grid-cols-2">
      <div>
        <h2>Welcome, {username || "Guest"}! ---vorerst alles hardcoded---</h2>
        <Task
          onClick={handleClick}
          firstname="Mirac"
          lastname="Fidanci"
          status="Completed"
        />
        <Task
          onClick={handleClick}
          firstname="Fikri"
          lastname="Öksüm"
          status="In Progress"
        />
        <Task
          onClick={handleClick}
          firstname="Gabriel"
          lastname="Montemayor"
          status="Not Started"
        />
      </div>
      <div>
        {isWindowVisible && (
          <Details firstname="Gabriel" lastname="Montemayor" />
        )}
      </div>
    </div>
  );
};

export default User;
