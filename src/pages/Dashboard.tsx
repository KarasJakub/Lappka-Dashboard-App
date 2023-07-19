import { AuthContext } from "context/AuthProvider";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      sdsdsdsdds
      {/* {isLoggedIn ? <div>Dashboard hello</div> : <Navigate to="login" />} */}
    </div>
  );
};

export default Dashboard;
