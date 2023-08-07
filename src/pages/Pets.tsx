import Dashboard from "components/Dashboard/DashboardLayout"
import DashboardPetsCardsSubpage from "components/Dashboard/DashboardPetsCardsComponents/DashboardPetsCardsSubpage"
import { Outlet, useLocation } from "react-router-dom"
import ROUTES from "helpers/utils/routes"

const Pets = () => {
  const location = useLocation()
  return (
    <Dashboard>
      {location.pathname === ROUTES.petsNewCard ? (
        <Outlet />
      ) : (
        <DashboardPetsCardsSubpage />
      )}
    </Dashboard>
  )
}

export default Pets
