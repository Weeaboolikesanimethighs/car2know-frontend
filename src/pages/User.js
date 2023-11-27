import React from "react";
import Task from "../components/Task";
import LogoutButton from '../components/LogoutButton'; // Import the LogoutButton component
import { useAuth } from '../contexts/AuthContext';


const User = () => {

  const { username, isAuthenticated  } = useAuth();

  return (

    <div>
      <h2>Welcome, {username}!</h2>
      <Task status="Completed" name="Mirac Fidanci" />
      <Task status="In Progress" name="Fikri Öksum" />
      <Task status="Not Started" name="Gabriel Montemayor" />
      {isAuthenticated && <LogoutButton />}

    </div>
  );
};

export default User;
