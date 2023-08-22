import * as S from "./PetsThumbnails.styled"
import PetThumbnail from "../PetThumbnail/PetThumbnail"

type PetsImagesThumbnailsProps = {
  images: string[]
  removeThumbnailHandler: (id: number) => void
}

const PetsThumbnails = ({
  images,
  removeThumbnailHandler,
}: PetsImagesThumbnailsProps) => {
  return (
    <S.Wrapper>
      {images.map((img: string, id: number) => {
        return (
          <PetThumbnail
            key={img}
            img={img}
            id={id}
            onClickHandler={() => removeThumbnailHandler(id)}
          />
        )
      })}
    </S.Wrapper>
  )
}

export default PetsThumbnails
