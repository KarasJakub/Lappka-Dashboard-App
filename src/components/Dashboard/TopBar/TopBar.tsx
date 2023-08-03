import * as S from "./TopBar.styled"
import Typography from "components/global/Typography/Typography"
import { useLocation } from "react-router-dom"
import HamburgerButton from "../SideBarNavigation/HamburgerButton/HamburgerButton"
import { useState } from "react"
import MobileNavigation from "../SideBarNavigation/MobileNavigation/MobileNavigation"
import { ReactComponent as BellIcon } from "assets/icons/BellIcon.svg"
import ButtonComponent from "components/global/Button/ButtonComponent.styled"
import BreadCrumbs from "../DashboardDefaultComponents/BreadCrumbs/BreadCrumbs"
import useResponsiveProps from "helpers/hooks/useResponsiveProps"
import { ReactComponent as AddIcon } from "assets/icons/AddIcon.svg"
import theme from "layout/theme"

const TopBar = () => {
  const location = useLocation()
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const ResponsiveString = useResponsiveProps()

  const toggleNavigation = () => {
    setIsMobileNavOpen((prevState) => !prevState)
  }

  return (
    <S.TopBarWrapper>
      <Typography variant="Heading20SemiBold" tag="h5">
        {location.pathname === "/" ? "Dashboard" : <BreadCrumbs />}
      </Typography>
      <S.RightSideWrapper>
        <ButtonComponent style={{ width: "unset" }}>
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
        {location.pathname === "/pets" && (
          <ButtonComponent className="primary" maxWidth="15rem" size="Large">
            <AddIcon fill={theme.colors.white} />
            <Typography>Nowa karta</Typography>
          </ButtonComponent>
        )}
      </S.RightSideWrapper>
    </S.TopBarWrapper>
  )
}

export default TopBar
