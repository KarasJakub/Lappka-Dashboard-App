import InputComponent from "components/global/Input/InputComponent";
import Typography from "components/global/Typography/Typography";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as S from "./FormContentRegister.styled";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { defaultMultiFormValuesTypes } from "./FormContentRegister";
import ParentCardComponent from "../../ParentComponent/ParentCardComponent";
import ButtonComponent from "components/global/Button/ButtonComponent.styled";
import useResponsiveProps from "helpers/hooks/useResponsiveProps";
import { ReactComponent as ArrowRightIcon } from "assets/icons/ArrowRightIcon.svg";

type RegisterOrganizationFormProps = {
  onNextStep: () => void;
  onMultiFormSubmit: (values: Partial<defaultMultiFormValuesTypes>) => void;
};

const registerOrganizationValidation = yup.object({
  organizationName: yup.string().required("Nazwa organizacji jest wymagana"),
  street: yup.string().required("Ulica jest wymagana"),
  postalCode: yup.string().required("Kod pocztowy jest wymagany"),
  city: yup.string().required("Miasto jest wymagany"),
  nip: yup.string().required("NIP jest wymagany"),
  krs: yup.string().required("KRS jest wymagany"),
});

export type RegisterOrganizationFieldValues = {
  organizationName: string;
  street: string;
  postalCode: string;
  city: string;
  nip: string;
  krs: string;
};

const RegisterShelter = ({
  onNextStep,
  onMultiFormSubmit,
}: RegisterOrganizationFormProps) => {
  const methods = useForm<RegisterOrganizationFieldValues>({
    resolver: yupResolver(registerOrganizationValidation),
  });
  const {
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<RegisterOrganizationFieldValues> = (data) => {
    onMultiFormSubmit({ shelter: data });
    onNextStep();
  };

  const ResponsiveString = useResponsiveProps();
  return (
    <>
      <ParentCardComponent
        title="Zarejestruj schronisko"
        subtitle="Wypełnij poniższy formularz i załóż Konto schroniska"
      >
        {/* <S.ProgressBarWrapper>
          <S.ProgressBarTopWrapper>
            <S.ProgressBarDot
              className={
                currentStepIndex === 1
                  ? "active isPrev isSecond"
                  : "active isPrev"
              }
            />
            <S.ProgressBarDot
              className={
                currentStepIndex === 1
                  ? "second isPrev active"
                  : "second isPrev"
              }
            />
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
        </S.ProgressBarWrapper> */}
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Typography tag="p" variant="UIText13Med" margin="Medium">
              Pełna nazwa Organizacji
            </Typography>
            <InputComponent
              variant="XLarge"
              placeholder="Wpisz"
              type="text"
              margin="Medium"
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
                  error={errors.postalCode ? errors.postalCode.message : ""}
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
              error={errors.krs ? errors.krs.message : ""}
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
          </form>
        </FormProvider>
      </ParentCardComponent>
    </>
  );
};

export default RegisterShelter;
