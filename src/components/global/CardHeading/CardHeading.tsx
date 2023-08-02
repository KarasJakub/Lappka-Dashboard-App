import Typography from "../Typography/Typography"
import * as S from "./CardHeading.styled"

interface CardHeadingProps {
  title: string
  children?: React.ReactNode
}

const CardHeading = ({ title, children }: CardHeadingProps) => {
  return (
    <S.CardHeadingWrapper>
      <Typography tag="p" variant="Heading18SemiBold">
        {title}
      </Typography>
      {children}
    </S.CardHeadingWrapper>
  )
}

export default CardHeading
