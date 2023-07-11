import { styled } from 'styled-components'

  interface StylingProps {
    size?: string
  }

const ButtonComponent = styled.button<StylingProps>`
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

  &.toggle {
    position: relative;
    padding: 0;
    width: 60px;
    height: 34px;
    background-color: ${({ theme }) => theme.colors.midGray5};
    border-radius: 34px;
    border: none;
    cursor: pointer;
    overflow: hidden;

    &:focus {
      outline: none;
    }

    &::before {
      content: '';
      position: absolute;
      width: 26px;
      height: 26px;
      background-color: #fff;
      border-radius: 50%;
      top: 4px;
      left: 4px;
      transition: transform 0.2s ease-in-out;
    }

    &.on {
      background-color: ${({ theme }) => theme.colors.primaryPr600};
    }

    &.on::before {
      transform: translateX(26px);
    }

    &.off {
      background-color: ${({ theme }) => theme.colors.midGray5};
    }

    &.off::before {
      transform: translateX(0);
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.lightGray2};
    }
  }
`

export default ButtonComponent
