import React from "react";
import * as S from "./LoginRegisterWrapper.styled";
import Typography from "components/global/Typography/Typography";
import { ReactComponent as CompanyLogo } from "assets/icons/CompanyLogo.svg";
import ButtonComponent from "components/global/Button/ButtonComponent.styled";
import { ReactComponent as CloseIcon } from "assets/icons/CloseButtonIcon.svg";
import useResponsiveProps from "helpers/hooks/useResponsiveProps";
import { useNavigate } from "react-router-dom";
import ROUTES from "helpers/utils/routes";

interface Props {
  children?: React.ReactNode;
  photo: JSX.Element;
  displayRegister?: boolean;
  displayLogin?: boolean;
}

const LoginRegisterWrapper = ({
  children,
  photo,
  displayRegister,
  displayLogin,
}: Props) => {
  const ResponsiveString = useResponsiveProps();
  const navigate = useNavigate();

  return (
    <S.LoginRegisterWrapper>
      <S.Navigation>
        <CompanyLogo />
        <S.ButtonsWrapper>
          <ButtonComponent
            className="secondary"
            size={ResponsiveString}
            style={{ display: displayRegister ? "block" : "none" }}
            onClick={() => navigate(ROUTES.register)}
          >
            <Typography tag="p" variant="UIText16MediumButton">
              Zarejestruj się
            </Typography>
          </ButtonComponent>
          <ButtonComponent
            className="secondary"
            size={ResponsiveString}
            style={{ display: displayLogin ? "block" : "none" }}
            onClick={() => navigate(ROUTES.login)}
          >
            <Typography tag="p" variant="UIText16MediumButton">
              Zaloguj się
            </Typography>
          </ButtonComponent>
          <ButtonComponent style={{ width: "unset" }}>
            <CloseIcon />
          </ButtonComponent>
        </S.ButtonsWrapper>
      </S.Navigation>
      <S.LoginContainer>{children}</S.LoginContainer>
      <S.ImageContainer>{photo}</S.ImageContainer>
    </S.LoginRegisterWrapper>
  );
};

export default LoginRegisterWrapper;
