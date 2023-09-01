import InputComponent from "components/global/Input/InputComponent"
import Typography from "components/global/Typography/Typography"
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { defaultMultiFormValuesTypes } from "./FormContentRegister"
import ParentCardComponent from "../../ParentComponent/ParentCardComponent"
import * as S from "./FormContentRegister.styled"
import ButtonComponent from "components/global/Button/ButtonComponent.styled"
import useResponsiveProps from "helpers/hooks/useResponsiveProps"
import { ReactComponent as ArrowLeftIcon } from "assets/icons/ArrowLeftIcon.svg"

type RegisterUserFormProps = {
  onPrevStep: () => void
  onMultiFormSubmit: (values: Partial<defaultMultiFormValuesTypes>) => void
  onFinalSubmit: () => void
}

export interface RegisterUserFieldValues {
  firstName: string
  lastName: string
  emailAddress: string
  password: string
  confirmPassword: string
}

const registerUserValidation = yup.object({
  firstName: yup
    .string()
    .matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/, {
      message: "Imię może zawierać tylko litery",
      excludeEmptyString: true,
    })
    .required("Imię jest wymagane"),
  lastName: yup
    .string()
    .matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/, {
      message: "Nazwisko może zawierać tylko litery",
      excludeEmptyString: true,
    })
    .required("Nazwisko jest wymagane"),
  emailAddress: yup
    .string()
    .email("Nieprawidłowy adres email")
    .required("Email jest wymagany"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/,
      "Hasło musi zawierać co najmniej 8 znaków, przynajmniej 1 znak nie alfanumeryczny, 1 cyfrę, 1 wielką literę i 1 małą literę"
    )
    .max(32, "Hasło nie może zawierać więcej jak 32 znaki")
    .required("Hasło jest wymagane"),
  confirmPassword: yup
    .string()
    .required("Hasło jest wymagane")
    .test({
      name: "password-match",
      message: "Hasła nie są takie same",
      test: function (value) {
        return this.parent.password === value
      },
    }),
})

const RegisterUser = ({
  onPrevStep,
  onMultiFormSubmit,
  onFinalSubmit,
}: RegisterUserFormProps) => {
  const methods = useForm<RegisterUserFieldValues>({
    resolver: yupResolver(registerUserValidation),
  })
  const {
    register,
    formState: { errors },
  } = methods

  const onSubmit: SubmitHandler<RegisterUserFieldValues> = (data) => {
    onMultiFormSubmit({ userRequest: data })
    // console.log(data)
    onFinalSubmit()
  }

  const ResponsiveString = useResponsiveProps()
  return (
    <>
      <ParentCardComponent
        title="Zarejestruj schronisko"
        subtitle="Wypełnij poniższy formularz i załóż Konto schroniska"
      >
        <S.ProgressBarWrapper>
          <S.ProgressBarTopWrapper>
            <S.ProgressBarDot className="active isPrev isSecond" />
            <S.ProgressBarDot className="second isPrev active" />
            <S.ProgressBarDot className="third" />
          </S.ProgressBarTopWrapper>
          <S.ProgressBarBottomWrapper>
            <Typography tag="p" variant="UIText12Reg">
              Dane organizacji
            </Typography>
            <S.TypographySecondWrapper>
              <Typography tag="p" variant="UIText12Reg">
                Dane użytkownika
              </Typography>
            </S.TypographySecondWrapper>
          </S.ProgressBarBottomWrapper>
        </S.ProgressBarWrapper>
        <FormProvider {...methods}>
          <S.Form onSubmit={methods.handleSubmit(onSubmit)}>
            <Typography tag="p" variant="UIText13Med" margin="Medium">
              Imię
            </Typography>
            <InputComponent
              variant="XLarge"
              placeholder="Wpisz"
              type="text"
              margin="Medium"
              {...register("firstName")}
              error={errors.firstName ? errors.firstName.message : ""}
            />
            <Typography tag="p" variant="UIText13Med" margin="Medium">
              Nazwisko
            </Typography>
            <InputComponent
              variant="XLarge"
              placeholder="Wpisz"
              type="text"
              margin="Medium"
              {...register("lastName")}
              error={errors.lastName ? errors.lastName.message : ""}
            />
            <Typography tag="p" variant="UIText13Med" margin="Medium">
              Adres e-mail
            </Typography>
            <InputComponent
              variant="XLarge"
              placeholder="Wpisz"
              type="text"
              margin="Medium"
              {...register("emailAddress")}
              error={errors.emailAddress ? errors.emailAddress.message : ""}
            />
            <Typography tag="p" variant="UIText13Med" margin="Medium">
              Hasło
            </Typography>
            <InputComponent
              variant="XLarge"
              placeholder="Wpisz"
              type="password"
              margin="Medium"
              {...register("password")}
              error={errors.password ? errors.password.message : ""}
            />
            <Typography tag="p" variant="UIText13Med" margin="Medium">
              Powtórz hasło
            </Typography>
            <InputComponent
              variant="XLarge"
              placeholder="Wpisz"
              type="password"
              margin="Medium"
              {...register("confirmPassword")}
              error={
                errors.confirmPassword ? errors.confirmPassword.message : ""
              }
            />
            <S.RegisterButtonsWrapper>
              <ButtonComponent
                className="secondary"
                size="XLarge"
                margin={ResponsiveString}
                type="button"
                onClick={() => onPrevStep()}
                style={{ flexDirection: "row-reverse", maxWidth: "30%" }}
              >
                <Typography tag="p" variant="UIText16MediumButton">
                  Powrót
                </Typography>
                <ArrowLeftIcon />
              </ButtonComponent>
              <ButtonComponent
                className="primary"
                size="XLarge"
                margin={ResponsiveString}
                type="submit"
              >
                <Typography tag="p" variant="UIText16MediumButton">
                  Zarejestruj się
                </Typography>
              </ButtonComponent>
            </S.RegisterButtonsWrapper>
          </S.Form>
        </FormProvider>
      </ParentCardComponent>
    </>
  )
}

export default RegisterUser
