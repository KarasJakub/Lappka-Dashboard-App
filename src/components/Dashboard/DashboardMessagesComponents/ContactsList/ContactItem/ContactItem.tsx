import Typography from "components/global/Typography/Typography"
import * as S from "./ContactItem.styled"
import theme from "layout/theme"

type Message = {
  user: string
  id: number
  message: string
}

type Conversation = Message[]

interface ContactItemProps {
  image: string
  name: string
  message?: string
  time: string
  messagesCounter: string
  path: string
  conversation: Conversation
}

const ContactItem = ({
  image,
  name,
  message,
  time,
  messagesCounter,
  path,
  conversation,
}: ContactItemProps) => {
  // Logic for dynamiclly displaying last message in left list and added logic for truncatec text
  const lastIndex = conversation.length - 1
  const lastMessage = conversation[lastIndex].message

  const truncatedMessage =
    lastMessage.length > 15 ? lastMessage.slice(0, 15) + "..." : lastMessage

  return (
    <S.ContactItemWrapper
      to={path}
      className={({ isActive }: any) => (isActive ? "active" : "")}
    >
      <S.LeftWrapper>
        <S.Image src={image} />
        <S.TextWrapper>
          <Typography tag="p" variant="UIText12SemiBold">
            {name}
          </Typography>
          <Typography
            tag="p"
            variant="UIText12Reg"
            color={theme.colors.darkGray2}
          >
            {truncatedMessage}
          </Typography>
        </S.TextWrapper>
      </S.LeftWrapper>
      <S.TextWrapper>
        <Typography
          tag="p"
          variant="UIText12Reg"
          color={theme.colors.darkGray2}
        >
          {time}
        </Typography>
        <S.CounterWrapper>
          <Typography tag="p" variant="UIText12SemiBold">
            {messagesCounter}
          </Typography>
        </S.CounterWrapper>
      </S.TextWrapper>
    </S.ContactItemWrapper>
  )
}

export default ContactItem
