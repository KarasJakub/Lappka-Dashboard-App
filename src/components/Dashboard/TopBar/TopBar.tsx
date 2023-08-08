import * as S from "./TopBar.styled"
import Typography from "components/global/Typography/Typography"
import { useLocation } from "react-router-dom"
import HamburgerButton from "../SideBarNavigation/HamburgerButton/HamburgerButton"
import { useState } from "react"
import MobileNavigation from "../SideBarNavigation/MobileNavigation/MobileNavigation"
import { ReactComponent as BellIcon } from "assets/icons/BellIcon.svg"
import ButtonComponent from "components/global/Button/ButtonComponent.styled"
import BreadCrumbs from "../DashboardDefaultComponents/BreadCrumbs/BreadCrumbs"

const TopBar = () => {
  const location = useLocation()
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const toggleNavigation = () => {
    setIsMobileNavOpen((prevState) => !prevState)
  }

  return (
    <S.TopBarWrapper>
      <Typography variant="Heading20SemiBold" tag="h5">
        {location.pathname === "/" ? "Dashboard" : <BreadCrumbs />}
      </Typography>
      <ButtonComponent style={{ width: "unset", marginRight: "1rem" }}>
        <BellIcon />
      </ButtonComponent>
      <HamburgerButton
        toggleNavigation={toggleNavigation}
        isMobileNavOpen={isMobileNavOpen}
      />
      <MobileNavigation
        isMobileNavOpen={isMobileNavOpen}
        disableNavigation={() => setIsMobileNavOpen(false)}
      />
    </S.TopBarWrapper>
  )
}

export default TopBar
