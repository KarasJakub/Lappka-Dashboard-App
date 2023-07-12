import * as S from "./ParentCardComponent.styled";
import Typography from "components/global/Typography/Typography";
import theme from "layout/theme";

interface ParentCardComponentProps {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
}

const ParentCardComponent = ({
  children,
  title,
  subtitle,
}: ParentCardComponentProps) => {
  return (
    <S.Wrapper>
      <Typography
        variant="Heading30Semi"
        color={theme.colors.primaryPr800}
        margin="0 0 .5rem 0"
      >
        {title}
      </Typography>
      <Typography variant="UIText14Reg" color={theme.colors.midGray2} tag="p">
        {subtitle}
      </Typography>
      {children}
    </S.Wrapper>
  );
};

export default ParentCardComponent;
