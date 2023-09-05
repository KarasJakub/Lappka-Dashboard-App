import InputComponent from "components/global/Input/InputComponent"
import Typography from "components/global/Typography/Typography"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import * as S from "./FormContentRegister.styled"
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"
import { defaultMultiFormValuesTypes } from "./FormContentRegister"
import ParentCardComponent from "../../ParentComponent/ParentCardComponent"
import ButtonComponent from "components/global/Button/ButtonComponent.styled"
import useResponsiveProps from "helpers/hooks/useResponsiveProps"
import { ReactComponent as ArrowRightIcon } from "assets/icons/ArrowRightIcon.svg"

type RegisterOrganizationFormProps = {
  onNextStep: () => void
  onMultiFormSubmit: (values: Partial<defaultMultiFormValuesTypes>) => void
}

export type RegisterOrganizationFieldValues = {
  organizationName: string
  city: string
  street: string
  zipCode: string
  nip: string
  krs: string
  phoneNumber: string
}

const registerOrganizationValidation = yup.object({
  organizationName: yup.string().required("Nazwa organizacji jest wymagana"),
  city: yup.string().required("Miasto jest wymagany"),
  street: yup.string().required("Ulica jest wymagana"),
  zipCode: yup
    .string()
    .matches(/^\d{2}-\d{3}$/, "Kod pocztowy powinien być w formacie XX-XXX")
    .required("Kod pocztowy jest wymagany"),
  nip: yup
    .string()
    .required("Numer NIP jest wymagany")
    .matches(
      /^\d{10}$/,
      'Pole "Numer NIP" musi składać się z dokładnie 10 cyfr'
    ),
  krs: yup
    .string()
    .required("Numer KRS telefonu jest wymagany")
    .test(
      "length",
      'Pole "Numer KRS" musi mieć dokładnie 10 znaków',
      (val) => val.length === 10
    ),
  phoneNumber: yup
    .string()
    .matches(/^\d{3}[-\s]?\d{3}[-\s]?\d{3}$/, {
      message:
        "Numer telefonu powinien składać się z 9 cyfr i może zawierać opcjonalnie myślniki lub spacje po trzeciej i szóstej cyfrze",
      excludeEmptyString: true,
    })
    .required("Numer telefonu jest wymagany"),
})

const RegisterShelter = ({
  onNextStep,
  onMultiFormSubmit,
}: RegisterOrganizationFormProps) => {
  const methods = useForm<RegisterOrganizationFieldValues>({
    resolver: yupResolver(registerOrganizationValidation),
  })
  const {
    register,
    formState: { errors },
  } = methods

  const onSubmit: SubmitHandler<RegisterOrganizationFieldValues> = (data) => {
    const collectedData = {
      ...data,
      longitude: 24,
      latitude: 50,
    }

    onMultiFormSubmit({ shelterRequest: collectedData })
    onNextStep()
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
            <S.ProgressBarDot className="active isPrev" />
            <S.ProgressBarDot className="second isPrev" />
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
              Pełna nazwa Organizacji
            </Typography>
            <InputComponent
              variant="XLarge"
              placeholder="Wpisz"
              type="text"
              margin="Medium"
              {...register("organizationName")}
              error={
                errors.organizationName ? errors.organizationName.message : ""
              }
            />
            <Typography tag="p" variant="UIText13Med" margin="Medium">
              Ulica
            </Typography>
            <InputComponent
              variant="XLarge"
              placeholder="Wpisz"
              type="text"
              margin="Medium"
              {...register("street")}
              error={errors.street ? errors.street.message : ""}
            />
            <S.PostalCodeCityWrapper>
              <S.InputTypographyVerticalWrapper style={{ maxWidth: "35%" }}>
                <Typography tag="p" variant="UIText13Med" margin="Medium">
                  Kod pocztowy
                </Typography>
                <InputComponent
                  variant="XLarge"
                  placeholder="00-000"
                  type="text"
                  margin="Medium"
                  {...register("zipCode")}
                  error={errors.zipCode ? errors.zipCode.message : ""}
                />
              </S.InputTypographyVerticalWrapper>
              <S.InputTypographyVerticalWrapper>
                <Typography tag="p" variant="UIText13Med" margin="Medium">
                  Miasto
                </Typography>
                <InputComponent
                  variant="XLarge"
                  placeholder="Wpisz"
                  type="text"
                  margin="Medium"
                  {...register("city")}
                  error={errors.city ? errors.city.message : ""}
                />
              </S.InputTypographyVerticalWrapper>
            </S.PostalCodeCityWrapper>
            <Typography tag="p" variant="UIText13Med" margin="Medium">
              Numer NIP
            </Typography>
            <InputComponent
              variant="XLarge"
              placeholder="Wpisz"
              type="text"
              margin="Medium"
              {...register("nip")}
              error={errors.nip ? errors.nip.message : ""}
            />
            <Typography tag="p" variant="UIText13Med" margin="Medium">
              Numer KRS
            </Typography>
            <InputComponent
              variant="XLarge"
              placeholder="Wpisz"
              type="text"
              margin="Medium"
              {...register("krs")}
              error={errors.krs ? errors.krs.message : ""}
            />
            <Typography tag="p" variant="UIText13Med" margin="Medium">
              Numer telefonu
            </Typography>
            <InputComponent
              variant="XLarge"
              placeholder="Wpisz"
              type="text"
              margin="Medium"
              {...register("phoneNumber")}
              error={errors.phoneNumber ? errors.phoneNumber.message : ""}
            />
            <ButtonComponent
              className="primary"
              size="XLarge"
              margin={ResponsiveString}
              type="submit"
            >
              <Typography tag="p" variant="UIText16MediumButton">
                Następny krok
              </Typography>
              <ArrowRightIcon fill="white" />
            </ButtonComponent>
          </S.Form>
        </FormProvider>
      </ParentCardComponent>
    </>
  )
}

export default RegisterShelter
