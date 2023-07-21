import * as S from "./FormContentResetPassword.styled";
import InputComponent from "components/global/Input/InputComponent";
import Typography from "components/global/Typography/Typography";
import ButtonComponent from "components/global/Button/ButtonComponent.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AuthContext } from "context/AuthProvider";
import { useContext } from "react";

export interface ResetPasswordFormData {
  email: string;
}

const schema = yup.object({
  email: yup
    .string()
    .required("Email jest wymagany")
    .email("Nieprawidłowy adres email"),
});

const FormContentResetPassword = () => {
  const { resetPasswordEmailSendHandler } = useContext(AuthContext);

  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ResetPasswordFormData) => {
    console.log(data);
    resetPasswordEmailSendHandler(data, setError);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <Typography tag="p" variant="UIText13Med" margin="Medium">
        E-mail
      </Typography>
      <InputComponent
        variant="XLarge"
        placeholder="Adres email"
        type="text"
        margin="Medium"
        {...register("email")}
        error={errors.email ? errors.email.message : ""}
      />
      <ButtonComponent
        className="primary"
        size="XLarge"
        margin="Medium"
        type="submit"
      >
        <Typography tag="p" variant="UIText16MediumButton">
          Resetuj hasło
        </Typography>
      </ButtonComponent>
    </S.Form>
  );
};

export default FormContentResetPassword;
