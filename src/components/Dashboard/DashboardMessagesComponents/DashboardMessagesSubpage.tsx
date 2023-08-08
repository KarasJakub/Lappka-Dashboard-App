import * as S from "./DashboardMessagesSubpage.styled"
import ContactsList from "./ContactsList/ContactsList"
import Conversation from "./Conversation/Conversation"

const DashboardMessagesSubpge = () => {
  return (
    <S.MessagesSubpageWrapper>
      <S.ContactListWrapper>
        <ContactsList />
      </S.ContactListWrapper>

      <Conversation />
    </S.MessagesSubpageWrapper>
  )
}

export default DashboardMessagesSubpge
