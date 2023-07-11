import * as S from "./LoginCardComponent.styled";
import Typography from "components/global/Typography/Typography";
import theme from "layout/theme";

interface LoginCardProps {
  children?: React.ReactNode;
}

const LoginCardComponent = ({ children }: LoginCardProps) => {
  return (
    <S.Wrapper>
      <Typography
        variant="Heading30Semi"
        color={theme.colors.primaryPr800}
        margin="0 0 .5rem 0"
      >
        Zaloguj się
      </Typography>
      <Typography variant="Paragraph14Reg" color={theme.colors.midGray2}>
        Witaj ponownie!
      </Typography>
      {children}
    </S.Wrapper>
  );
};

export default LoginCardComponent;
