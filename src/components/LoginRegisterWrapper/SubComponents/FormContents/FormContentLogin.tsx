import * as S from "./FormContentLogin.syled";
import InputComponent from "components/global/Input/InputComponent";
import Typography from "components/global/Typography/Typography";
import ButtonComponent from "components/global/Button/ButtonComponent.styled";
import theme from "layout/theme";
import { ReactComponent as GoogleIcon } from "assets/icons/GoogleIcon.svg";
import { ReactComponent as FacebookIcon } from "assets/icons/FacebookIcon.svg";
import useResponsiveProps from "helpers/hooks/useResponsiveProps";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface FormData {
  email: string;
  password: string;
  checkbox?: boolean;
}

const schema = yup.object({
  email: yup
    .string()
    .email("Nieprawidłowy adres email")
    .required("Email jest wymagany"),
  password: yup
    .string()
    .min(8, "Hasło musi zawierac co najmniej 8 znaków")
    .max(32, "Hasło nie może zawierać więcej jak 32 znaki")
    .required("Hasło jest wymagane"),
});

const FormContentLogin = () => {
  const ResponsiveString = useResponsiveProps();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
      checkbox: true,
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
          {...register("password")}
          error={errors.password ? errors.password.message : ""}
        />
        <S.AdditionalOptionsWrapper>
          <S.CheckBoxWrapper>
            <S.Checkbox
              type="checkbox"
              id="checkbox"
              {...register("checkbox")}
            />
            <Typography tag="p" variant="UIText14Reg">
              Pamiętaj mnie
            </Typography>
          </S.CheckBoxWrapper>
          <S.PasswordLink href="/">
            <Typography tag="p" variant="UIText14Reg" margin="Medium">
              Zapomniałem hasła
            </Typography>
          </S.PasswordLink>
        </S.AdditionalOptionsWrapper>
        <ButtonComponent
          className="primary"
          size="XLarge"
          margin={ResponsiveString}
          type="submit"
        >
          <Typography tag="p" variant="UIText16MediumButton">
            Zaloguj się
          </Typography>
        </ButtonComponent>
      </S.Form>
      <S.MultiLoginHeading>
        <Typography tag="p" variant="UIText12Reg" color={theme.colors.midGray3}>
          Lub zaloguj się przez
        </Typography>
      </S.MultiLoginHeading>
      <S.ButtonsWrapper>
        <S.SocialButtonWrapper>
          <ButtonComponent size="XLarge" className="google">
            <GoogleIcon style={{ marginRight: "1.5rem" }} />
            <Typography
              tag="p"
              variant="UIText16MediumButton"
              color="rgba(0, 0, 0, .54)"
            >
              Google
            </Typography>
          </ButtonComponent>
        </S.SocialButtonWrapper>
        <S.SocialButtonWrapper>
          <ButtonComponent size="XLarge" className="facebook">
            <FacebookIcon style={{ marginRight: "1.5rem" }} />
            <Typography
              tag="p"
              variant="UIText16MediumButton"
              color={theme.colors.white}
            >
              Facebook
            </Typography>
          </ButtonComponent>
        </S.SocialButtonWrapper>
      </S.ButtonsWrapper>
    </>
  );
};

export default FormContentLogin;
