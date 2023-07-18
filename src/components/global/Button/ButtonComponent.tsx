import ButtonComponent from "./ButtonComponent.styled";
import theme from "layout/theme";
import { ReactComponent as ArrowRightIcon } from "assets/icons/ArrowRightIcon.svg";
import { useState } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "XLarge" | "Large" | "Medium";
  margin?: "XLarge" | "Large" | "Medium";
  arrow?: boolean;
  disabled?: boolean;
  variant?: string;
}
const Button = ({
  children,
  arrow,
  size,
  variant,
  margin,
  ...props
}: ButtonProps) => {
  const [toggleState, setToggleState] = useState(false);

  const handleToggle = () => {
    setToggleState(!toggleState);
  };

  return (
    <ButtonComponent
      {...props}
      size={size}
      className={`${variant} ${toggleState ? "on" : "off"}`}
      onClick={handleToggle}
      margin={margin}
    >
      {children}
      <ArrowRightIcon
        fill={theme.colors.white}
        style={{ display: arrow ? "block" : "none" }}
      />
    </ButtonComponent>
  );
};

export default Button;
