import Typography from "components/global/Typography/Typography"
import * as S from "./Conversation.styled"
import ConversationForm from "./ConversationForm/ConversationForm"
import theme from "layout/theme"
import { useParams } from "react-router-dom"
import { ContactsListDummyData } from "../ContactsList/ContactsList"
import ConversationBubble from "./ConversationBubble/ConversationBubble"

const Conversation = () => {
  const { userId } = useParams()

  const desiredPath = `/messages/${userId}`

  const desiredContact = ContactsListDummyData.find(
    (contact) => contact.path === desiredPath
  )

  return (
    <S.ConverstionWrapper>
      <S.ConversationInnerWrapper>
        <Typography
          tag="p"
          variant="UIText12SemiBold"
          color={theme.colors.midGray4}
        >
          Dzisiaj
        </Typography>
        {desiredContact
          ? desiredContact.conversation.map((message) => (
              <>
                <ConversationBubble
                  isMe={message.user}
                  message={message.message}
                  photo={desiredContact.image}
                />
              </>
            ))
          : ""}
      </S.ConversationInnerWrapper>
      <ConversationForm />
    </S.ConverstionWrapper>
  )
}

export default Conversation
