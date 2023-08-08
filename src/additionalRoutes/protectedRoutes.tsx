import { Navigate, Outlet } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "context/AuthProvider"
import ROUTES from "helpers/utils/routes"

const ProtectedRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext)

  return isLoggedIn ? <Outlet /> : <Navigate to={ROUTES.login} />
}

export default ProtectedRoutes
