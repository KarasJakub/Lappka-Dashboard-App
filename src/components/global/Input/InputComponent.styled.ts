import { styled } from 'styled-components'

  interface StylingProps {
    size?: string
  }

const StyledInputComponent = styled.button<StylingProps>`
  border-radius: .3rem;
  border: none;
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: ${({ theme }) => theme.weight.medium};
  display: flex;
  align-items: center;
  gap: .3rem;
  cursor: pointer;
  padding: 0;
  padding: ${({ size }) => size === "Medium" ? ".4rem 1.2rem" : ""};
  padding: ${({ size }) => size === "Large" ? ".8rem 1.6rem" : ""};
  padding: ${({ size }) => size === "XLarge" ? "1.2rem 1.6rem" : ""};
  font-size: ${({ size }) => size === "Medium" ? "1.4rem" : "1.6rem"};

  &.primary {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primaryPr600};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryPr700};
    }

    &:disabled {
      opacity: 50%;
    }
  }

  &.secondary {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.lightGray2};

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightGray2};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.darkGray2};
    }
  }

  &.toggle {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.lightGray2};

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightGray2};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.darkGray2};
    }
  }
`

export default StyledInputComponent
