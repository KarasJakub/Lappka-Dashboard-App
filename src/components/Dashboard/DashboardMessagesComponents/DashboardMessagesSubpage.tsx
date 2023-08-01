import * as S from "./DashboardMessagesSubpage.styled"
import ContactsList from "./ContactsList/ContactsList"
import Conversation from "./Conversation/Conversation"
import ContactsListDummyData from "./ContactsList/ContactsList"

const DashboardMessagesSubpge = () => {
  return (
    <S.MessagesSubpageWrapper>
      <ContactsList />
      <Conversation />
    </S.MessagesSubpageWrapper>
  )
}

export default DashboardMessagesSubpge
