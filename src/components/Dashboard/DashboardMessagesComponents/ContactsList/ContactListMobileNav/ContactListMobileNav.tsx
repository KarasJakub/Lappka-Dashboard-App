import * as SS from "./ContactListMobileNav.styled"
import * as S from "components/Dashboard/SideBarNavigation/SidebarNavigation.styled"
import { ReactComponent as CompanyLogo } from "assets/icons/CompanyLogo.svg"
import DashboardNavElement from "components/Dashboard/DashboardNavElement/DashboardNavElement"
import { ReactComponent as UsersIcon } from "assets/icons/UsersIcon.svg"
import Typography from "components/global/Typography/Typography"
import theme from "layout/theme"
import { NavigationContent } from "components/Dashboard/SideBarNavigation/SidebarNavigation"
import ROUTES from "helpers/utils/routes"
import UserCard from "components/Dashboard/UserCard/UserCard"
import ContactsList from "../ContactsList"

interface Props {
  isMobileNavOpen: boolean
  disableNavigation: () => void
}

const ContactListMobileNav = (props: Props) => {
  return (
    <SS.MobileNavigationWrapper isOpen={props.isMobileNavOpen}>
      <ContactsList isMobile />
    </SS.MobileNavigationWrapper>
  )
}

export default ContactListMobileNav
