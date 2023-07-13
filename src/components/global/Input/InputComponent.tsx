import * as S from "./InputComponent.styled";
import { ReactComponent as CrossedEyeIcon } from "assets/icons/CrossedEyeIcon.svg";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "XLarge" | "Large" | "Medium";
  margin?: "XLarge" | "Large" | "Medium";
  disabled?: boolean;
  maxWidth?: string;
}

const InputComponent = ({
  variant,
  maxWidth,
  margin,
  ...props
}: InputProps) => {
  return (
    // <S.StyledInputComponentWrapper>
    <S.StyledInputComponent
      {...props}
      variant={variant}
      maxWidth={maxWidth}
      margin={margin}
    />
    // <CrossedEyeIcon />
    // </S.StyledInputComponentWrapper>
  );
};

export default InputComponent;
