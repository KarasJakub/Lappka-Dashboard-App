import Typography from "../Typography/Typography"
import * as S from "./CardHeading.styled"

interface CardHeadingProps {
  title: string
  action?: React.ReactNode
}

const CardHeading = ({ title, action }: CardHeadingProps) => {
  return (
    <S.CardHeadingWrapper>
      <Typography tag="p" variant="UIText16SemiBold">
        {title}
      </Typography>
      {action}
    </S.CardHeadingWrapper>
  )
}

export default CardHeading
