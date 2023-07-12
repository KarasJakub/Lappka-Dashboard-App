import StyledInputComponent from "./InputComponent.styled";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "XLarge" | "Large" | "Medium";
  disabled?: boolean;
  maxWidth?: string;
  margin?: string;
}

const InputComponent = ({
  variant,
  maxWidth,
  margin,
  ...props
}: InputProps) => {
  return (
    <StyledInputComponent
      {...props}
      variant={variant}
      maxWidth={maxWidth}
      margin={margin}
    />
  );
};

export default InputComponent;
