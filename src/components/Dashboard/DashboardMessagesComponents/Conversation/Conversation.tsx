import Typography from "components/global/Typography/Typography"
import * as S from "./Conversation.styled"
import ConversationForm from "./ConversationForm/ConversationForm"
import theme from "layout/theme"
import { useParams } from "react-router-dom"
import { ContactsListDummyData } from "../ContactsList/ContactsList"
import ConversationBubble from "./ConversationBubble/ConversationBubble"
import { useLocation } from "react-router-dom"
import HamburgerButton from "components/Dashboard/SideBarNavigation/HamburgerButton/HamburgerButton"
import ContactListMobileNav from "../ContactsList/ContactListMobileNav/ContactListMobileNav"
import { useState } from "react"
import NavButton from "../ContactsList/ContactListMobileNav/MobileNavButton"

const Conversation = () => {
  const { userId } = useParams()
  const location = useLocation()

  const desiredPath = `/messages/${userId}`

  const desiredContact = ContactsListDummyData.find(
    (contact) => contact.path === desiredPath
  )
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const toggleNavigation = () => {
    setIsMobileNavOpen((prevState) => !prevState)
  }

  return (
    <S.ConverstionWrapper>
      <S.ConversationMobileNavWrapper>
        <NavButton
          toggleNavigation={toggleNavigation}
          isMobileNavOpen={isMobileNavOpen}
        />
        <ContactListMobileNav
          isMobileNavOpen={isMobileNavOpen}
          disableNavigation={() => setIsMobileNavOpen(false)}
        />
      </S.ConversationMobileNavWrapper>
      <S.ConversationInnerWrapper>
        <S.HeadingWrapper>
          <Typography
            tag="p"
            variant="UIText12SemiBold"
            color={theme.colors.midGray4}
          >
            {location.pathname === "/messages" ? "" : "Dzisiaj"}
          </Typography>
        </S.HeadingWrapper>
        {desiredContact
          ? desiredContact.conversation.map((message) => (
              <>
                <ConversationBubble
                  isMe={message.user}
                  message={message.message}
                  photo={desiredContact.image}
                  time={desiredContact.time}
                />
              </>
            ))
          : ""}
      </S.ConversationInnerWrapper>

      {location.pathname === "/messages" ? "" : <ConversationForm />}
    </S.ConverstionWrapper>
  )
}

export default Conversation
