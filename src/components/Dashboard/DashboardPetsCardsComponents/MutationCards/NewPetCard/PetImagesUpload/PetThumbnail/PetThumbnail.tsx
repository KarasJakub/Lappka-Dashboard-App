import * as S from "./PetThumbnail.styled"
import { ReactComponent as CloseButtonIcon } from "assets/icons/CloseButtonIcon.svg"

interface PetThumbnailProps {
  img: string
  id: number
  onClickHandler: (id: number) => void
}

const PetThumbnail = ({ img, id, onClickHandler }: PetThumbnailProps) => {
  return (
    <S.ImageWrapper>
      <S.Image src={img} alt="image" />
      <S.IconWrapper onClick={() => onClickHandler(id)}>
        <CloseButtonIcon />
      </S.IconWrapper>
    </S.ImageWrapper>
  )
}

export default PetThumbnail
