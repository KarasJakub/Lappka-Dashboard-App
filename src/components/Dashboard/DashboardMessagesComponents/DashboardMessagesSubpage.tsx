import * as S from "./DashboardMessagesSubpage.styled"
import ContactsList from "./ContactsList/ContactsList"

const DashboardMessagesSubpage = () => {
  return (
    <S.MessagesSubpageWrapper>
      <ContactsList />
    </S.MessagesSubpageWrapper>
  )
}

export default DashboardMessagesSubpage
