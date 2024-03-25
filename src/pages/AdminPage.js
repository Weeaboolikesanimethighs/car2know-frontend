import React from "react";
import Task from "../components/Task";
//import LogoutButton from '../components/LogoutButton'; // Import the LogoutButton component
import Details from "../components/Details";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

const AdminPage = () => {
  const { username, isAuthenticated } = useAuth();

  const [isDetailsWindowVisible, setDetailsWindowVisible] = useState(false);

  const [isRequestWindowVisible, setRequestWindowVisible] = useState(false);

  const [notifications, setNotifications] = useState([]);

  const [index, setIndex] = useState(1);

  const openDetailWindow = (index) => {
    setDetailsWindowVisible(!isDetailsWindowVisible);
  };

  const handleNotificationClick = (notification) => {
    console.log("Notification clicked:", notification);
  };
  const openRequestWindow = () => {
    setRequestWindowVisible(!isRequestWindowVisible);
  };

  let tasks = [
    {
      firstname: "Mirac",
      lastname: "Fidanci",
      status: "Completed",
    },
    {
      firstname: "Fikri",
      lastname: "Öksüm",
      status: "In Progress",
    },
    {
      firstname: "Gabriel",
      lastname: "Montemayor",
      status: "Not Started",
    },
  ];

  return (
    <div className="grid grid-cols-2">
      <div>
        <h2>Welcome, {username || "Guest"}!</h2>
        <Task onClick={openDetailWindow} person={tasks[0]} />
        <Task onClick={openDetailWindow} person={tasks[1]} />
        <Task onClick={openDetailWindow} person={tasks[2]} />
      </div>
      <div>
        {isRequestWindowVisible && (
          <div className="absolute right-0 mt-10 mr-4 bg-white border rounded shadow-md p-4 z-10">
            {/* Benachrichtigungen */}
            {notifications.length > 0 ? (
              notifications.map((notification, index) => (
                <div key={index} className="mb-2">
                  <p>{notification.name}</p>
                  <p>{notification.date}</p>
                  <button
                    onClick={() => handleNotificationClick(notification)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Details
                  </button>
                </div>
              ))
            ) : (
              <p>No notifications</p>
            )}
          </div>
        )}
      </div>
      <div>{isDetailsWindowVisible && <Details person={tasks[index]} />}</div>
      <div
        className="fixed right-10"
        style={{ bottom: "calc(5% + 3rem)" }} // Hier wird der Abstand zum unteren Rand angepasst
      >
        <button
          onClick={openRequestWindow}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Anfragen
        </button>
        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white font-bold text-xs">
          {notifications}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
