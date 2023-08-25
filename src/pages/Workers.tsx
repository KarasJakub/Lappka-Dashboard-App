import Dashboard from "components/Dashboard/DashboardLayout"
import DashboardWorkersSubpage from "components/Dashboard/DashboardWorkersComponents/DashboardWorkersSubpage"
import { useLocation, Outlet } from "react-router-dom"
import ROUTES from "helpers/utils/routes"

const Workers = () => {
  const location = useLocation()
  return (
    <Dashboard>
      {location.pathname === ROUTES.workers ? (
        <DashboardWorkersSubpage />
      ) : (
        <Outlet />
      )}
    </Dashboard>
  )
}

export default Workers
