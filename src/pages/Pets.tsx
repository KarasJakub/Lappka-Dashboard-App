import Dashboard from "components/Dashboard/DashboardLayout"
import DashboardPetsCardsSubpage from "components/Dashboard/DashboardPetsCardsComponents/DashboardPetsCardsSubpage"
import { Outlet, useLocation } from "react-router-dom"
import ROUTES from "helpers/utils/routes"
import { DashboardPetsSubpageWrapper } from "components/Dashboard/DashboardPetsCardsComponents/DashboardPetsCardsSubpage.styled"

const Pets = () => {
  const location = useLocation()
  return (
    <Dashboard>
      {location.pathname === ROUTES.pets ? (
        <DashboardPetsCardsSubpage />
      ) : (
        <DashboardPetsSubpageWrapper>
          <Outlet />
        </DashboardPetsSubpageWrapper>
      )}
    </Dashboard>
  )
}

export default Pets
