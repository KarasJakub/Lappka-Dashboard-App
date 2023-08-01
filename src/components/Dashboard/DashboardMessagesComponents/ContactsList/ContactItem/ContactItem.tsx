import Typography from "components/global/Typography/Typography"
import * as S from "./ContactItem.styled"
import theme from "layout/theme"

interface ContactItemProps {
  image: string
  name: string
  message: string
  time: string
  messagesCounter: string
  path: string
}

const ContactItem = ({
  image,
  name,
  message,
  time,
  messagesCounter,
  path,
}: ContactItemProps) => {
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
            {message}
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
