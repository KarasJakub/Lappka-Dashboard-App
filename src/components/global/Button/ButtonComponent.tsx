import theme from "layout/theme";
import ButtonComponent from "./ButtonComponent.styled";

interface Preset {
  color: keyof typeof theme.color;
  background: keyof typeof theme.color;
  hover: {
    color: keyof typeof theme.color;
    background: keyof typeof theme.color;
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
      color: "black",
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

const Button = ({
  preset,
  margin,
  padding,
  size,
  disabled,
  children,
  ...props
}: ButtonProps) => {
  return (
    <ButtonComponent
      preset={presets[preset]}
      margin={margin}
      padding={padding}
      size={size}
      disabled={disabled ?? false}
      {...props}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
