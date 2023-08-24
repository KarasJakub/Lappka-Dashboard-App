import Typography from "components/global/Typography/Typography"
import * as S from "./VoluntaryCard.styled"
import ToggleButton from "components/global/Button/ToggleButton"
import InputComponent from "components/global/Input/InputComponent"
import TextAreaInput from "components/global/Input/TextAreaInput/TextAreaInput"

const VoluntaryCard = () => {
  return (
    <S.VoluntaryCardWrapper>
      <S.Form>
        <S.SectionWrapper>
          <S.TitleWrapper>
            <Typography tag="h6" variant="UIText16SemiBold">
              Wpłać darowiznę
            </Typography>
            <ToggleButton label="Aktywna" />
          </S.TitleWrapper>
          <S.InputsWrapper>
            <Typography tag="p" variant="UIText13Med" margin="Medium">
              Podaj numer konta
            </Typography>
            <InputComponent
              variant="XLarge"
              placeholder="0000-0000-0000-0000"
              type="text"
              margin="Medium"
              // {...register("name")}
              // error={errors.name?.message}
            />
            <Typography tag="p" variant="UIText13Med" margin="Medium">
              Opis
            </Typography>
            <TextAreaInput
              variant="XLarge"
              placeholder="Textarea"
              margin="Medium"
              //   {...register("description")}
              //   error={errors.description?.message}
            />
          </S.InputsWrapper>
        </S.SectionWrapper>
        <S.SectionWrapper>
          <S.TitleWrapper>
            <Typography tag="h6" variant="UIText16SemiBold">
              Codzienna pomoc
            </Typography>
            <ToggleButton label="Aktywna" />
          </S.TitleWrapper>
          <S.InputsWrapper>
            <Typography tag="p" variant="UIText13Med" margin="Medium">
              Opis
            </Typography>
            <TextAreaInput
              variant="XLarge"
              placeholder="Textarea"
              margin="Medium"
              //   {...register("description")}
              //   error={errors.description?.message}
            />
          </S.InputsWrapper>
        </S.SectionWrapper>
        <S.SectionWrapper>
          <S.TitleWrapper>
            <Typography tag="h6" variant="UIText16SemiBold">
              Wyprowadzanie psów
            </Typography>
            <ToggleButton label="Aktywna" />
          </S.TitleWrapper>
          <S.InputsWrapper>
            <Typography tag="p" variant="UIText13Med" margin="Medium">
              Opis
            </Typography>
            <TextAreaInput
              variant="XLarge"
              placeholder="Textarea"
              margin="Medium"
              //   {...register("description")}
              //   error={errors.description?.message}
            />
          </S.InputsWrapper>
        </S.SectionWrapper>
      </S.Form>
    </S.VoluntaryCardWrapper>
  )
}

export default VoluntaryCard
