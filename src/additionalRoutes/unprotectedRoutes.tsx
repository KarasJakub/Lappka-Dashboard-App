import { Navigate, Outlet } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "context/AuthProvider"
import ROUTES from "helpers/utils/routes"

const UnprotectedRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext)

  return !isLoggedIn ? <Outlet /> : <Navigate to={ROUTES.home} />
}

export default UnprotectedRoutes
