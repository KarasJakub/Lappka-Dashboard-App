import Typography from "components/global/Typography/Typography"
import * as S from "./PopularPetCard.styled"
import { ReactComponent as EyeIcon } from "assets/icons/EyeIcon.svg"
import theme from "layout/theme"

interface PopularPerCardProps {
  image: string
  name: string
  race: string
  views: string
}

const PopularPetCard = ({ image, name, race, views }: PopularPerCardProps) => {
  const formatNumber = (number: number): string => {
    const numberFormatter = new Intl.NumberFormat("pl-PL")

    if (number >= 1000 && number < 1000000) {
      const formattedNumber = (number / 1000).toFixed(1)
      const formattedString = formattedNumber.endsWith(".0")
        ? formattedNumber.slice(0, -2)
        : formattedNumber
      return numberFormatter.format(parseFloat(formattedString)) + " tyś"
    } else if (number >= 1000000) {
      const formattedNumber = (number / 1000000).toFixed(1)
      const formattedString = formattedNumber.endsWith(".0")
        ? formattedNumber.slice(0, -2)
        : formattedNumber
      return numberFormatter.format(parseFloat(formattedString)) + " mln"
    } else {
      return numberFormatter.format(number)
    }
  }

  const ShowNumber = (number: string) => {
    const convertedNumber = parseFloat(number)

    if (!isNaN(convertedNumber)) {
      return formatNumber(convertedNumber)
    } else {
      return "Niepoprawna liczba"
    }
  }
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
          {ShowNumber(views)}
        </Typography>
      </S.RightWrapper>
    </S.CardWrapper>
  )
}

export default PopularPetCard
