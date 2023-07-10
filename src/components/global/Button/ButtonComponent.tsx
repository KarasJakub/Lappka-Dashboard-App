import ButtonComponent from "./ButtonComponent.styled";
import theme from "layout/theme";
import { ReactComponent as ArrowRightIcon } from "assets/icons/ArrowRightIcon.svg";

export type Variant = keyof typeof presets;

interface Preset {
  color: keyof typeof theme.colors;
  background: keyof typeof theme.colors;
  hover: {
    color: keyof typeof theme.colors;
    background: keyof typeof theme.colors;
  };
}

export const presets: Record<string, Preset> = {
  primary: {
    color: "white",
    background: "primary-pr600",
    hover: {
      color: "white",
      background: "primary-pr700",
    },
  },
  secondary: {
    color: "black",
    background: "white",
    hover: {
      color: "white",
      background: "light-gray-2",
    },
  },
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | React.ReactNode[];
  preset: keyof typeof presets;
  variant: keyof typeof presets;
  size?: "XLarge" | "Large" | "Medium";
  arrow?: boolean;
}
const Button = ({
  children,
  preset,
  variant,
  arrow,
  ...props
}: ButtonProps) => {
  return (
    <ButtonComponent preset={presets[preset]} variant={variant} {...props}>
      {children}
      <ArrowRightIcon
        fill={theme.colors.white}
        style={{ display: arrow ? "block" : "none" }}
      />
    </ButtonComponent>
  );
};

export default Button;
