import React from "react";
import Task from "../components/Task";
<<<<<<< Updated upstream
import LogoutButton from '../components/LogoutButton'; // Import the LogoutButton component
import { useAuth } from '../contexts/AuthContext';

=======
import Details from "../components/Details";
>>>>>>> Stashed changes

const User = () => {

  const { username, isAuthenticated  } = useAuth();

  return (
<<<<<<< Updated upstream

    <div>
      <h2>Welcome, {username}!</h2>
      <Task status="Completed" name="Mirac Fidanci" />
      <Task status="In Progress" name="Fikri Öksum" />
      <Task status="Not Started" name="Gabriel Montemayor" />
      {isAuthenticated && <LogoutButton />}

=======
    <div className="grid grid-cols-2">
      <div>
        <Task status="Completed" name="Mirac Fidanci" />
        <Task status="In Progress" name="Fikri Öksum" />
        <Task status="Not Started" name="Gabriel Montemayor" />
      </div>
      <div>
        <Details />
      </div>
>>>>>>> Stashed changes
    </div>
  );
};

export default User;
