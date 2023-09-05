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

  &.delete {
    background-color: ${({ theme }) => theme.colors.redR500};
  }
`

export const ToggleButtonContainer = styled.div<{ disabled?: boolean }>`
  display: flex;
  gap: 12px;
  align-items: center;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`

export const ToggleContainer = styled.label<{ disabled?: boolean }>`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 20px;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  outline: none;

  &:checked + span {
    background-color: ${({ theme }) => theme.colors.primaryPr600};
  }

  &:focus + span {
    box-shadow: ${({ theme }) => theme.colors.primaryPr600};
  }

  &:checked + span:before {
    transform: translateX(20px);
  }
`

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: background-color 0.4s;
  border-radius: 20px;

  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: transform 0.4s;
    border-radius: 50%;
  }
`

export default ButtonComponent
