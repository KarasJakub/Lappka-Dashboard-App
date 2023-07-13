import React from "react";
import * as S from "./FormContentLogin.syled";
import InputComponent from "components/global/Input/InputComponent";
import Typography from "components/global/Typography/Typography";
import ButtonComponent from "components/global/Button/ButtonComponent.styled";
import theme from "layout/theme";
import { ReactComponent as GoogleIcon } from "assets/icons/GoogleIcon.svg";
import { ReactComponent as FacebookIcon } from "assets/icons/FacebookIcon.svg";
import useResponsiveProps from "helpers/hooks/useResponsiveProps";

const FormContentLogin = () => {
  const ResponsiveString = useResponsiveProps();

  return (
    <S.Form>
      <Typography tag="p" variant="UIText13Med" margin="0 0 .4rem 0">
        E-mail
      </Typography>
      <InputComponent
        variant="XLarge"
        placeholder="Adres email"
        type="text"
        margin="0 0 1.6rem 0"
      />
      <Typography tag="p" variant="UIText13Med" margin="0 0 .4rem 0">
        Hasło
      </Typography>
      <InputComponent
        variant="XLarge"
        placeholder="Wpisz"
        type="password"
        margin="0 0 1.6rem 0"
      />
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
        style={{ width: "100%" }}
        margin={ResponsiveString}
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
