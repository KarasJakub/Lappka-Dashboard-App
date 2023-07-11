import React from "react";
import * as S from "./LoginRegisterWrapper.styled";
import Typography from "components/global/Typography/Typography";
import { ReactComponent as CompanyLogo } from "assets/icons/CompanyLogo.svg";
import { ReactComponent as WomenWithCat } from "assets/photos/WomenWithCat.svg";
import ButtonComponent from "components/global/Button/ButtonComponent.styled";

interface Props {
  children?: React.ReactNode;
}

const LoginRegisterWrapper = ({ children }: Props) => {
  return (
    <S.LoginRegisterWrapper>
      <S.Navigation>
        <CompanyLogo />
        <ButtonComponent className="secondary" size="Large">
          <Typography variant="UIText16MediumButton">
            Zarejestruj się
          </Typography>
        </ButtonComponent>
      </S.Navigation>
      <S.LoginContainer>assadsdd</S.LoginContainer>
      <S.ImageContainer>
        <WomenWithCat />
      </S.ImageContainer>
    </S.LoginRegisterWrapper>
  );
};

export default LoginRegisterWrapper;
