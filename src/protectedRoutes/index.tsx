import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "context/AuthProvider";

// type ProtectedRouteProps = {
//   children: JSX.Element;
// };

export const PrivateRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
