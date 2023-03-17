import React from "react";
import "../styles/dash.css";

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div className="page">
      <div className="container">
        <h3>Dashboard</h3>
        <button onClick={handleLogout} className="LogoutButton">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
