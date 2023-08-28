import { Navigate, Outlet } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "context/AuthProvider"
import ROUTES from "helpers/utils/routes"

const UnprotectedRoutes = () => {
  // const { isLoggedIn } = useContext(AuthContext)

  return <Outlet />
}

export default UnprotectedRoutes
