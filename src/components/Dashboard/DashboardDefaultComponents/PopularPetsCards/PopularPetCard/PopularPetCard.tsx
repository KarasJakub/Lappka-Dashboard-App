import Typography from "components/global/Typography/Typography"
import * as S from "./PopularPetCard.styled"
import { ReactComponent as EyeIcon } from "assets/icons/EyeIcon.svg"

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
          <Typography tag="p" variant="UIText12Reg">
            {race}
          </Typography>
        </S.TypographyWrapper>
      </S.LeftWrapper>
      <S.RightWrapper>
        <EyeIcon />
        <Typography tag="p" variant="UIText14SemiBold">
          {views} tyś
        </Typography>
      </S.RightWrapper>
    </S.CardWrapper>
  )
}

export default PopularPetCard
