import styled from 'styled-components'
import { ButtonProps, presets } from './ButtonComponent'

interface ButtonComponentProps extends Omit<ButtonProps, 'preset'> {
  preset: typeof presets.primary
  margin: string[] | undefined
  padding: string[] | undefined
}

const ButtonComponent = styled.button<ButtonComponentProps>`
  color: ${({ theme, preset }) => theme.colors[preset.color]};
  background-color: ${({ theme, preset }) => theme.colors[preset.background]};
  padding: 1em 1.5em;
  border-radius: .8rem;
  cursor: pointer;
  text-decoration: none;
  transition: background-color .4s ease-in-out;

  &:hover {
    color: ${({ theme, preset }) => theme.colors[preset.hover.color]};
    background-color: ${({ theme, preset }) =>
      theme.colors[preset.hover.background]};
  }

  &:disabled {
    opacity: 50%;
  }

`

export default ButtonComponent
