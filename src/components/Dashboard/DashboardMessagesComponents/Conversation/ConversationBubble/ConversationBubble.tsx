import Typography from "components/global/Typography/Typography"
import * as S from "./ConversationBubble.styled"
import theme from "layout/theme"

interface ConversationBubbleProps {
  isMe?: string
  message: string
  photo: string
  time: string
}

const ConversationBubble = ({
  isMe,
  message,
  photo,
  time,
}: ConversationBubbleProps) => {
  return (
    <>
      {isMe === "me" ? (
        <S.BubbleWrapper className="isMe">
          <S.BubbleItem className="isMe">
            <Typography
              tag="p"
              variant="UIText14Med"
              color={theme.colors.white}
            >
              {message}
            </Typography>
            <Typography tag="p" variant="UIText12Reg" color="#CCCCCC">
              {time}
            </Typography>
          </S.BubbleItem>
        </S.BubbleWrapper>
      ) : (
        <S.BubbleWrapper>
          <S.BubblePhoto src={photo} alt="Zdjęcie użytkownika" />
          <S.BubbleItem className="isNotMe">
            <Typography tag="p" variant="UIText14Med" color="#616161">
              {message}
            </Typography>
            <Typography tag="p" variant="UIText12Reg" color="#CCCCCC">
              {time}
            </Typography>
          </S.BubbleItem>
        </S.BubbleWrapper>
      )}
    </>
  )
}

export default ConversationBubble
