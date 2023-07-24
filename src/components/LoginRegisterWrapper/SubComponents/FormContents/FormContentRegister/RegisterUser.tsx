import InputComponent from "components/global/Input/InputComponent";
import Typography from "components/global/Typography/Typography";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { defaultMultiFormValuesTypes } from "./FormContentRegister";
import ParentCardComponent from "../../ParentComponent/ParentCardComponent";

type RegisterUserFormProps = {
  onPrevStep: () => void;
  onMultiFormSubmit: (values: Partial<defaultMultiFormValuesTypes>) => void;
  onFinalSubmit: () => void;
};

export interface RegisterUserFieldValues {
  fullName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const registerUserValidation = yup.object({
  fullName: yup.string().required("Nazwa organizacji jest wymagana"),
  email: yup.string().required("Nazwa ulicy jest wymagana"),
  password: yup.string().required("Kod pocztowy jest wymagany"),
  repeatPassword: yup.string().required("Miasto jest wymagane"),
});

const RegisterUser = ({
  onPrevStep,
  onMultiFormSubmit,
  onFinalSubmit,
}: RegisterUserFormProps) => {
  const methods = useForm<RegisterUserFieldValues>({
    resolver: yupResolver(registerUserValidation),
  });
  const {
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<RegisterUserFieldValues> = (data) => {
    onMultiFormSubmit({ user: data });
    onFinalSubmit();
  };
  return (
    <>
      <ParentCardComponent
        title="Zarejestruj schronisko"
        subtitle="Wypełnij poniższy formularz i załóż Konto schroniska"
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Typography tag="p" variant="UIText13Med" margin="Medium">
              Imie i Nazwisko
            </Typography>
            <InputComponent
              variant="XLarge"
              placeholder="Wpisz"
              type="text"
              margin="Medium"
              error={errors.fullName ? errors.fullName.message : ""}
            />
            <Typography tag="p" variant="UIText13Med" margin="Medium">
              Adres e-mail
            </Typography>
            <InputComponent
              variant="XLarge"
              placeholder="Wpisz"
              type="text"
              margin="Medium"
              error={errors.email ? errors.email.message : ""}
            />
            <Typography tag="p" variant="UIText13Med" margin="Medium">
              Hasło
            </Typography>
            <InputComponent
              variant="XLarge"
              placeholder="Wpisz"
              type="password"
              margin="Medium"
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
              error={errors.repeatPassword ? errors.repeatPassword.message : ""}
            />
          </form>
        </FormProvider>
      </ParentCardComponent>
    </>
  );
};

export default RegisterUser;
