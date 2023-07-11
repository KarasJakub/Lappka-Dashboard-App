import * as S from "./LoginCardComponent.styled";
import Typography from "components/global/Typography/Typography";
import theme from "layout/theme";

interface LoginCardProps {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
}

const LoginCardComponent = ({ children, title, subtitle }: LoginCardProps) => {
  return (
    <S.Wrapper>
      <Typography
        variant="Heading30Semi"
        color={theme.colors.primaryPr800}
        margin="0 0 .5rem 0"
      >
        {title}
      </Typography>
      <Typography variant="Paragraph14Reg" color={theme.colors.midGray2}>
        {subtitle}
      </Typography>
      {children}
    </S.Wrapper>
  );
};

export default LoginCardComponent;
