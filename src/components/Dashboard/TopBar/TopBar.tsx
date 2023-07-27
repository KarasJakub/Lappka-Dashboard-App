import * as S from "./TopBar.styled"
import Typography from "components/global/Typography/Typography"
import { useLocation } from "react-router-dom"
import HamburgerButton from "../SideBarNavigation/HamburgerButton/HamburgerButton"
import { useState } from "react"
import MobileNavigation from "../SideBarNavigation/MobileNavigation/MobileNavigation"

const TopBar = () => {
  const location = useLocation()
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const toggleNavigation = () => {
    setIsMobileNavOpen((prevState) => !prevState)
  }

  const removeSlashFromString = (input: string) => {
    const ReplacedBeforeCapitalization = input.replace(/\//g, "")
    const AfterChanges =
      ReplacedBeforeCapitalization.charAt(0).toUpperCase() +
      ReplacedBeforeCapitalization.slice(1)
    return AfterChanges
  }
  return (
    <S.TopBarWrapper>
      <Typography variant="Heading20SemiBold" tag="h5">
        {location.pathname === "/"
          ? "Dashboard"
          : removeSlashFromString(location.pathname)}
      </Typography>
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
