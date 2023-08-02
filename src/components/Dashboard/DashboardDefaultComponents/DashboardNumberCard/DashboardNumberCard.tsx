import * as S from "./DashboardNumberCard.styled"
import Typography from "components/global/Typography/Typography"
import theme from "layout/theme"

interface DashboardNumberCardProps {
  icon: JSX.Element
  title: string
  price: string
}

const DashboardNumberCard = ({
  icon,
  title,
  price,
}: DashboardNumberCardProps) => {
  return (
    <S.CardWrapper>
      <S.GreenCircle>{icon}</S.GreenCircle>
      <S.TextWrapper>
        <Typography
          tag="h6"
          variant="UIText12SemiBold"
          color={theme.colors.midGray4}
        >
          {title}
        </Typography>
        <Typography tag="h5" variant="Heading30Semi">
          {price}
        </Typography>
      </S.TextWrapper>
    </S.CardWrapper>
  )
}

export default DashboardNumberCard
