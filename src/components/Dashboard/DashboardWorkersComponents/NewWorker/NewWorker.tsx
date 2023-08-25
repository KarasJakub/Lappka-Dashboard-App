import theme from "layout/theme"
import * as S from "./NewWorker.styled"
import Typography from "components/global/Typography/Typography"
import CardFooter from "components/global/CardFooter/CardFooter"
import InputComponent from "components/global/Input/InputComponent"
import ButtonComponent from "components/global/Button/ButtonComponent.styled"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import ROUTES from "helpers/utils/routes"

const defaultValues = {
  email: "",
}

export const newWorkerValidation = yup.object({
  email: yup
    .string()
    .email("Nieprawidłowy adres email")
    .required("Email jest wymagany"),
})

type defaultFormValuesTypes = typeof defaultValues
export type handleFormValues = keyof defaultFormValuesTypes
const NewWorker = () => {
  const navigate = useNavigate()

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(newWorkerValidation),
  })
  const {
    formState: { errors },
    register,
  } = methods

  const onSubmit: SubmitHandler<defaultFormValuesTypes> = (data) => {
    console.log(data)
  }
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
          <FormProvider {...methods}>
            <form>
              <Typography tag="p" variant="UIText13Med" margin="Medium">
                Adres email
              </Typography>
              <InputComponent
                variant="XLarge"
                placeholder="Wpisz adres email"
                type="text"
                margin="Medium"
                {...register("email")}
                error={errors.email?.message}
              />
            </form>
          </FormProvider>
        </S.TopWrapper>
        <CardFooter>
          <ButtonComponent
            className="secondary"
            size="Large"
            maxWidth="8rem"
            onClick={() => navigate(ROUTES.workers)}
          >
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
            onClick={methods.handleSubmit(onSubmit)}
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
