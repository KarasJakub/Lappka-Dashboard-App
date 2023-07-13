import React from "react";
import * as S from "./LoginRegisterWrapper.styled";
import Typography from "components/global/Typography/Typography";
import { ReactComponent as CompanyLogo } from "assets/icons/CompanyLogo.svg";
import ButtonComponent from "components/global/Button/ButtonComponent.styled";
import { ReactComponent as CloseIcon } from "assets/icons/CloseButtonIcon.svg";
import useResponsiveProps from "helpers/hooks/useResponsiveProps";

interface Props {
  children?: React.ReactNode;
  photo: JSX.Element;
}

const LoginRegisterWrapper = ({ children, photo }: Props) => {
  const ResponsiveString = useResponsiveProps();

  return (
    <S.LoginRegisterWrapper>
      <S.Navigation>
        <CompanyLogo />
        <S.ButtonsWrapper>
          <ButtonComponent className="secondary" size={ResponsiveString}>
            <Typography tag="p" variant="UIText16MediumButton">
              Zarejestruj się
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
