import { Navigate, Outlet } from "react-router-dom"
import ROUTES from "helpers/utils/routes"

const ProtectedRoutes = () => {
  // const { isLoggedIn } = useContext(AuthContext)
  const isLoggedIn = localStorage.getItem("accessToken") !== null

  return isLoggedIn ? <Outlet /> : <Navigate to={ROUTES.login} />
}

export default ProtectedRoutes
