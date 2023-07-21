import * as S from "./FormContentResetPassword.styled";
import InputComponent from "components/global/Input/InputComponent";
import Typography from "components/global/Typography/Typography";
import ButtonComponent from "components/global/Button/ButtonComponent.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import ROUTES from "helpers/utils/routes";

export interface FormData {
  password: string;
  confirmPassword: string;
}

const schema = yup.object({
  password: yup
    .string()
    .min(8, "Hasło musi zawierac co najmniej 8 znaków")
    .max(32, "Hasło nie może zawierać więcej jak 32 znaki")
    .required("Hasło jest wymagane"),
  confirmPassword: yup
    .string()
    .required("Hasło jest wymagane")
    .test({
      name: "password-match",
      message: "Hasła nie są takie same",
      test: function (value) {
        return this.parent.password === value;
      },
    }),
});

const FormContentSetNewPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    navigate(ROUTES.setnewpasswordend);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
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
        Potwierdź hasło
      </Typography>
      <InputComponent
        variant="XLarge"
        placeholder="Wpisz"
        type="password"
        margin="Medium"
        {...register("confirmPassword")}
        error={errors.confirmPassword ? errors.confirmPassword.message : ""}
      />
      <ButtonComponent
        className="primary"
        size="XLarge"
        margin="Medium"
        type="submit"
      >
        <Typography tag="p" variant="UIText16MediumButton">
          Utwórz nowe hasło
        </Typography>
      </ButtonComponent>
    </S.Form>
  );
};

export default FormContentSetNewPassword;
