import React from "react";
import TypographyComponent from "./Typography.styled";

export interface TypographyProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  variant?: string;
  children?: React.ReactNode;
  color?: string;
  margin?: string;
  padding?: string;
}

const Typography = ({
  tag,
  variant,
  children,
  color,
  margin,
  padding,
}: TypographyProps) => {
  return (
    <TypographyComponent
      as={tag}
      className={variant}
      color={color}
      margin={margin}
      padding={padding}
    >
      {children}
    </TypographyComponent>
  );
};

export default Typography;
