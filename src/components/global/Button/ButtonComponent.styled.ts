import { styled } from 'styled-components'
import { ButtonProps, presets } from './ButtonComponent'

interface ButtonComponentProps extends Omit<ButtonProps, 'preset'> {
    preset: typeof presets.primary
  }

const ButtonComponent = styled.button<ButtonComponentProps>`
  color: ${({ theme, preset }) => theme.colors[preset.color]};
  background-color: ${({ theme, preset }) => theme.colors[preset.background]};
  border-radius: .8rem;
  border: none;
  font-family: ${({ theme }) => theme.font.primary};

  &:hover {
    color: ${({ theme, preset }) => theme.colors[preset.hover.color]};
    background-color: ${({ theme, preset }) =>
      theme.colors[preset.hover.background]};
  }
`

export default ButtonComponent
