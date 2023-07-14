import * as S from "./FormContentResetPassword.styled";
import InputComponent from "components/global/Input/InputComponent";
import Typography from "components/global/Typography/Typography";
import ButtonComponent from "components/global/Button/ButtonComponent.styled";
import theme from "layout/theme";
import useResponsiveProps from "helpers/hooks/useResponsiveProps";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface FormData {
  email: string;
}

const schema = yup.object({
  email: yup
    .string()
    .email("Nieprawidłowy adres email")
    .required("Email jest wymagany"),
});

const FormContentResetPassword = () => {
  const ResponsiveString = useResponsiveProps();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
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
          formInfo={errors.email ? errors.email.message : ""}
        />
        <ButtonComponent
          className="primary"
          size="XLarge"
          margin="Medium"
          type="submit"
        >
          <Typography tag="p" variant="UIText16MediumButton">
            Zaloguj się
          </Typography>
        </ButtonComponent>
      </S.Form>
    </>
  );
};

export default FormContentResetPassword;
