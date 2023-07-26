import * as S from "./DashboardNumberCard.styled"
import Typography from "components/global/Typography/Typography"

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
        <Typography tag="h6" variant="UIText12SemiBold">
          {title}
        </Typography>
        <Typography tag="h5" variant="">
          {price}
        </Typography>
      </S.TextWrapper>
    </S.CardWrapper>
  )
}

export default DashboardNumberCard
