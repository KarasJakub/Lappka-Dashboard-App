import React from "react"
import TypographyComponent from "./Typography.styled"
import { SizeVariant } from "types/types"

export interface TypographyProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "label"
  variant?: string
  children: React.ReactNode
  color?: string
  margin?: SizeVariant
  className?: string
}

const Typography = ({
  tag,
  variant,
  children,
  color,
  margin,
}: TypographyProps) => {
  return (
    <TypographyComponent
      as={tag}
      className={variant}
      color={color}
      margin={margin}
    >
      {children}
    </TypographyComponent>
  )
}

export default Typography
