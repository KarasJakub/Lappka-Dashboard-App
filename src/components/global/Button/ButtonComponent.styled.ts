import { styled } from 'styled-components'
import { ButtonProps, presets, Variant } from './ButtonComponent'

interface ButtonComponentProps extends Omit<ButtonProps, 'preset'> {
    preset: typeof presets.primary
    variant: Variant;
  }

  interface StylingProps {
    size?: string
  }

const ButtonComponent = styled.button<ButtonComponentProps, StylingProps>`
  color: ${({ theme, preset }) => theme.colors[preset.color]};
  background-color: ${({ theme, preset }) => theme.colors[preset.background]};
  border-radius: .3rem;
  border: none;
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: ${({ theme }) => theme.weight.medium};
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;
  padding: ${({ size }) => size === "Medium" ? ".4rem 1.2rem" : ""};
  padding: ${({ size }) => size === "Large" ? ".8rem 1.6rem" : ""};
  padding: ${({ size }) => size === "XLarge" ? "1.2rem 1.6rem" : ""};
  &:hover {
    color: ${({ theme, preset, variant }) =>
      theme.colors[presets[variant].hover.color || preset.color]};
    background-color: ${({ theme, preset, variant }) =>
      theme.colors[presets[variant].hover.background || preset.background]};
  }
`

export default ButtonComponent
