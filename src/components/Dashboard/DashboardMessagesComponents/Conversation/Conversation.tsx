import Typography from "components/global/Typography/Typography"
import * as S from "./Conversation.styled"
import ConversationForm from "./ConversationForm/ConversationForm"
import theme from "layout/theme"

interface ConversationProps {
  messages?: {
    user: string
    id: number
    message: string
  }[]
}

const Conversation = ({ messages }: ConversationProps) => {
  console.log(messages)
  return (
    <S.ConverstionWrapper>
      <Typography
        tag="p"
        variant="UIText12SemiBold"
        color={theme.colors.midGray4}
      >
        Dzisiaj
      </Typography>
      <S.ConversationInnerWrapper></S.ConversationInnerWrapper>
      <ConversationForm />
    </S.ConverstionWrapper>
  )
}

export default Conversation
