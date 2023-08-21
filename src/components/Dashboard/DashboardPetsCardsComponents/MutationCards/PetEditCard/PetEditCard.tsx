import Typography from "components/global/Typography/Typography"
import * as S from "./PetEditCard.styled"
import ButtonComponent from "components/global/Button/ButtonComponent.styled"
import theme from "layout/theme"
import { ReactComponent as PetEditReturnIcon } from "assets/icons/PetEditReturnIcon.svg"
import EditPetDummyImage from "assets/photos/EditPetDummyImage.png"
import InputComponent from "components/global/Input/InputComponent"
import { useState } from "react"

const PetEditCard = () => {
  const [isEditActive, setIsEditActive] = useState(false)
  console.log(isEditActive)

  const handleReadOnly = () => {
    setIsEditActive(false)
  }
  return (
    <S.EditCardWrapper>
      <S.TopButtonsWrapper>
        <ButtonComponent maxWidth="5rem" onClick={() => setIsEditActive(false)}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <PetEditReturnIcon />
            <Typography
              tag="p"
              variant="UIText16MediumButton"
              color={theme.colors.midGray1}
            >
              Wróć
            </Typography>
          </div>
        </ButtonComponent>
        <ButtonComponent maxWidth="5rem" onClick={() => setIsEditActive(true)}>
          <Typography
            tag="p"
            variant="UIText16MediumButton"
            color={theme.colors.primaryPr600}
          >
            Edytuj
          </Typography>
        </ButtonComponent>
      </S.TopButtonsWrapper>
      <S.ImagesSectionWrapper>
        <S.Image src={EditPetDummyImage} alt="cat image" />
        <S.Image src={EditPetDummyImage} alt="cat image" />
        <S.Image src={EditPetDummyImage} alt="cat image" />
        <S.Image src={EditPetDummyImage} alt="cat image" />
      </S.ImagesSectionWrapper>
      <S.ContentEditSection>
        <form action="">
          <Typography>wpisz</Typography>
          <InputComponent
            variant="XLarge"
            type="text"
            margin="Medium"
            placeholder="Bella"
            readOnly={isEditActive ? false : true}
            style={{ border: isEditActive ? "" : "none" }}
          />
        </form>
      </S.ContentEditSection>
    </S.EditCardWrapper>
  )
}

export default PetEditCard
