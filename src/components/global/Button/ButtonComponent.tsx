import ButtonComponent from "./ButtonComponent.styled";
import theme from "layout/theme";

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
  margin?: string[];
  padding?: string[];
  size?: string[];
  disabled?: boolean;
}
const Button = ({ children, preset }: ButtonProps) => {
  return <ButtonComponent preset={presets[preset]}>{children}</ButtonComponent>;
};

export default Button;
