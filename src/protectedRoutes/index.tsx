import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "context/AuthProvider";

type ProtectedRouteProps = {
  children: JSX.Element;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? children : <Navigate to="/login" />;
};
