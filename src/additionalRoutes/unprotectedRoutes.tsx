import { Navigate, Outlet } from "react-router-dom"
import ROUTES from "helpers/utils/routes"

const UnprotectedRoutes = () => {
  const isLoggedIn = localStorage.getItem("accessToken") !== null

  return !isLoggedIn ? <Outlet /> : <Navigate to={ROUTES.home} />
}

export default UnprotectedRoutes
