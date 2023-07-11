import StyledInputComponent from "./InputComponent.styled";
import theme from "layout/theme";

export interface InputProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | React.ReactNode[];
  size?: "XLarge" | "Large" | "Medium";
  arrow?: boolean;
  disabled?: boolean;
  variant?: string;
}
const InputComponent = ({
  children,
  arrow,
  size,
  variant,
  ...props
}: InputProps) => {
  return (
    <StyledInputComponent {...props} size={size} className={`${variant}`}>
      {children}
    </StyledInputComponent>
  );
};

export default InputComponent;
