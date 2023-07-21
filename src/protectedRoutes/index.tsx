import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "context/AuthProvider";

export const ProtectedRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
