import * as S from "./TopBar.styled"
import Typography from "components/global/Typography/Typography"
import { useLocation } from "react-router-dom"
import HamburgerButton from "../SideBarNavigation/HamburgerButton/HamburgerButton"
import { useState } from "react"
import MobileNavigation from "../SideBarNavigation/MobileNavigation/MobileNavigation"
import { ReactComponent as BellIcon } from "assets/icons/BellIcon.svg"
import ButtonComponent from "components/global/Button/ButtonComponent.styled"
import BreadCrumbs from "../DashboardDefaultComponents/BreadCrumbs/BreadCrumbs"
import { ReactComponent as AddIcon } from "assets/icons/AddIcon.svg"
import theme from "layout/theme"
import ROUTES from "helpers/utils/routes"
import { useNavigate } from "react-router-dom"

const TopBar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const toggleNavigation = () => {
    setIsMobileNavOpen((prevState) => !prevState)
  }

  return (
    <S.TopBarWrapper>
      <Typography variant="Heading20SemiBold" tag="h5">
        {location.pathname === ROUTES.home ? "Dashboard" : <BreadCrumbs />}
      </Typography>
      <S.RightSideWrapper>
        <ButtonComponent style={{ width: "unset" }}>
          <BellIcon />
        </ButtonComponent>

        <MobileNavigation
          isMobileNavOpen={isMobileNavOpen}
          disableNavigation={() => setIsMobileNavOpen(false)}
        />
        {location.pathname === ROUTES.pets && (
          <S.MobileButtonWrapper>
            <ButtonComponent
              className="primary"
              maxWidth="15rem"
              size="Large"
              onClick={() => navigate(ROUTES.petsNewCard)}
            >
              <AddIcon fill={theme.colors.white} />
              <Typography>Nowa karta</Typography>
            </ButtonComponent>
          </S.MobileButtonWrapper>
        )}

        {location.pathname === ROUTES.petsNewCard && (
          <ButtonComponent
            className="secondary"
            maxWidth="8rem"
            size="Large"
            onClick={() => navigate(ROUTES.pets)}
          >
            Anuluj
          </ButtonComponent>
        )}
        {location.pathname === ROUTES.settings && (
          <ButtonComponent
            className="secondary"
            maxWidth="8rem"
            size="Large"
            onClick={() => navigate(ROUTES.pets)}
          >
            Anuluj
          </ButtonComponent>
        )}
        {location.pathname === ROUTES.workers && (
          <S.MobileButtonWrapper>
            <ButtonComponent
              className="primary"
              size="Large"
              onClick={() => navigate(ROUTES.newWorker)}
            >
              <AddIcon fill="white" />
              Dodaj pracownika
            </ButtonComponent>
          </S.MobileButtonWrapper>
        )}
        <HamburgerButton
          toggleNavigation={toggleNavigation}
          isMobileNavOpen={isMobileNavOpen}
        />
      </S.RightSideWrapper>
    </S.TopBarWrapper>
  )
}

export default TopBar
