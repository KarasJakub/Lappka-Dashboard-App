import theme from "layout/theme"
import * as S from "./NewWorker.styled"
import Typography from "components/global/Typography/Typography"
import CardFooter from "components/global/CardFooter/CardFooter"
import InputComponent from "components/global/Input/InputComponent"
import ButtonComponent from "components/global/Button/ButtonComponent.styled"

const NewWorker = () => {
  return (
    <S.NewWorkerRootWrapper>
      <S.NewWorkerInnerWrapper>
        <S.TopWrapper>
          <S.TextWrapper>
            <Typography tag="h6" variant="UIText16SemiBold">
              Dodaj pracownika
            </Typography>
            <Typography
              tag="p"
              variant="UIText12Reg"
              color={theme.colors.midGray1}
            >
              Wpisz adres email użytkownika aplikacji Łappka i dodaj go do
              swojej organizacji.
            </Typography>
          </S.TextWrapper>
          <Typography tag="p" variant="UIText13Med" margin="Medium">
            Adres email
          </Typography>
          <InputComponent
            variant="XLarge"
            placeholder="Wpisz adres email"
            type="text"
            margin="Medium"
            //   {...register("name")}
            //   error={errors.name?.message}
          />
        </S.TopWrapper>
        <CardFooter>
          <ButtonComponent className="secondary" size="Large" maxWidth="8rem">
            <Typography
              tag="p"
              variant="UIText16MediumButton"
              color={theme.colors.black}
            >
              Anuluj
            </Typography>
          </ButtonComponent>
          <ButtonComponent
            className="primary"
            size="Large"
            maxWidth="8rem"
            type="submit"
          >
            <Typography
              tag="p"
              variant="UIText16MediumButton"
              color={theme.colors.white}
            >
              Dodaj
            </Typography>
          </ButtonComponent>
        </CardFooter>
      </S.NewWorkerInnerWrapper>
    </S.NewWorkerRootWrapper>
  )
}

export default NewWorker
