import * as SS from "./ContactListMobileNav.styled"
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
