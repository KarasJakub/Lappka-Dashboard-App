import Typography from "components/global/Typography/Typography"
import * as S from "./PopularPetCard.styled"
import { ReactComponent as EyeIcon } from "assets/icons/EyeIcon.svg"
import theme from "layout/theme"
import { formatNumber } from "helpers/utils/formatNumber"

interface PopularPerCardProps {
  image: string
  name: string
  race: string
  views: string
}

const PopularPetCard = ({ image, name, race, views }: PopularPerCardProps) => {
  return (
    <S.CardWrapper>
      <S.LeftWrapper>
        <S.CardImage src={image} />
        <S.TypographyWrapper>
          <Typography tag="h5" variant="UIText14Reg">
            {name}
          </Typography>
          <Typography
            tag="p"
            variant="UIText12Reg"
            color={theme.colors.midGray3}
          >
            {race}
          </Typography>
        </S.TypographyWrapper>
      </S.LeftWrapper>
      <S.RightWrapper>
        <EyeIcon />
        <Typography tag="p" variant="UIText14SemiBold">
          {formatNumber(views)}
        </Typography>
      </S.RightWrapper>
    </S.CardWrapper>
  )
}

export default PopularPetCard
