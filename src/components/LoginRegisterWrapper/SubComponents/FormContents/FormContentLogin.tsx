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

export type FormData = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
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
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <Typography tag="p" variant="UIText13Med" margin="0 0 .4rem 0">
        E-mail
      </Typography>
      <InputComponent
        // variant="XLarge"
        placeholder="Adres email"
        type="text"
        // margin="Medium"
        {...register("email")}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <Typography tag="p" variant="UIText13Med" margin="0 0 .4rem 0">
        Hasło
      </Typography>
      {/* <InputComponent
        variant="XLarge"
        placeholder="Wpisz"
        type="password"
        margin="Medium"
        // {...register("password")}
      />
      {errors.password && <p>{errors.password.message}</p>} */}
      <S.AdditionalOptionsWrapper>
        <S.CheckBoxWrapper>
          <S.Checkbox type="checkbox" id="checkbox" />
          <Typography tag="p" variant="UIText14Reg">
            Pamiętaj mnie
          </Typography>
        </S.CheckBoxWrapper>
        <S.PasswordLink href="/">
          <Typography tag="p" variant="UIText14Reg" margin="0 0 .4rem 0">
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
    </S.Form>
  );
};

export default FormContentLogin;
