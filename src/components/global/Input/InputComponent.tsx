import StyledInputComponent from "./InputComponent.styled";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "XLarge" | "Large" | "Medium";
  disabled?: boolean;
}

const InputComponent = ({ variant, ...props }: InputProps) => {
  return <StyledInputComponent {...props} variant={variant} />;
};

export default InputComponent;
