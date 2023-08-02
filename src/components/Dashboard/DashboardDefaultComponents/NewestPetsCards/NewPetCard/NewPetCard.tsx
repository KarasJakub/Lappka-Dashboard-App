import Typography from "components/global/Typography/Typography"
import * as S from "./NewPetCard.styled"

interface NewPetCardProps {
  image: string
  name: string
  race: string
  date: string
}

const NewPetCard = ({ image, name, race, date }: NewPetCardProps) => {
  return (
    <S.PetCardWrapper>
      <S.Image src={image} />
      <S.ContentBar>
        <Typography tag="h5" variant="UIText16SemiBold">
          {name}
        </Typography>
        <S.BottomTypography>
          <Typography tag="p" variant="UIText14Reg">
            {race}
          </Typography>
          <Typography tag="p" variant="UIText12Reg">
            {date}
          </Typography>
        </S.BottomTypography>
      </S.ContentBar>
    </S.PetCardWrapper>
  )
}

export default NewPetCard
