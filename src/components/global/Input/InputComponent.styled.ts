import { styled } from 'styled-components'

  interface StylingProps {
    variant?: string
    maxWidth?: string
    margin?: string
  }

const StyledInputComponent = styled.input<StylingProps>`
  padding: ${({ variant }) => variant === "XLarge" ? "1.2rem 1.6rem" : ""};
  padding: ${({ variant }) => variant === "Large" ? ".8rem 1.6rem" : ""};
  padding: ${({ variant }) => variant === "Medium" ? ".4rem 1.2rem" : ""};
  font-size: 1.4rem;
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.lightGray1};
  border-radius: .5rem;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  margin: ${({ margin }) => margin};

    &:focus {
        border: 1px solid ${({ theme }) => theme.colors.statusFocus};
    }

    &:disabled {
        background-color: ${({ theme }) => theme.colors.lightGray4};
    }
`

export default StyledInputComponent
