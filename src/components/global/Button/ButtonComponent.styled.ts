import { styled } from 'styled-components'
import { getButtonPaddingSize, getButtonMarginSize } from 'helpers/utils/getStyles'

  interface StylingProps {
    size?: string
    margin?: string
    maxWidth?: string
  }

const ButtonComponent = styled.button<StylingProps>`
  width: 100%;
  border-radius: .8rem;
  border: none;
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: ${({ theme }) => theme.weight.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .3rem;
  cursor: pointer;
  padding: ${({ size }) => getButtonPaddingSize(size)};
  margin: ${({ margin }) => getButtonMarginSize(margin)};
  max-width: ${({ maxWidth }) => maxWidth};
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

  &.google {
    color: rgba(0, 0, 0, .54);
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    box-shadow: 0px 1px 3px 0px rgba(66, 68, 90, .5);

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightGray2};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.darkGray2};
    }
  }

  &.facebook {
    color: ${({ theme }) => theme.colors.white};
    background-color: rgb(24, 119, 242);
    border: none;
    box-shadow: 0px 1px 3px 0px rgba(66, 68, 90, .5);

    &:hover {
      background-color: rgb(19, 103, 212);
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.darkGray2};
    }
  }

  &.underlined {
    color: ${({ theme }) => theme.colors.primaryPr600};
    text-decoration: underline;
    text-underline-offset: .5rem;
    text-decoration-color: ${({ theme }) => theme.colors.primaryPr500};
    width: unset;
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
