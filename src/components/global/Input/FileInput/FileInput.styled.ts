import {  styled } from 'styled-components'
import { getInputPaddingSize, getInputMarginSize } from 'helpers/utils/getStyles'

  interface StylingProps {
    variant?: string
    maxWidth?: string
    margin?: string
  }

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

`

export const InputContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid rgba(213, 218, 221, 1);
    border-radius: .6rem;
    cursor: pointer;
`

export const IconContainer = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      right: 0;
      background-color: ${({ theme }) => theme.colors.lightGray5};
      border-radius: 0 .6rem .6rem 0;
      border-left: 1px solid ${({ theme }) => theme.colors.lightGray1};
      max-width: 4rem;
      height: 100%;
      padding: 1.4rem;
`

export const InnerWrapper = styled.div`
      padding: .8rem 1.6rem;
      width: 100%;
      height: 100%;
`

export const StyledInputComponent = styled.input<StylingProps>`
  padding: ${({ variant }) => getInputPaddingSize(variant)};
  margin: ${({ margin }) => getInputMarginSize(margin)};
  font-size: 1.4rem;
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.lightGray1};
  border-radius: .5rem;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  position: relative;
  z-index: 2;
    cursor: pointer;
  &[type="file"] {
    display: none;
  }

  &:placeholder {
    color: ${({ theme }) => theme.colors.midGray4};
  }

  &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.statusFocus};
  }

  &:disabled {
      background-color: ${({ theme }) => theme.colors.lightGray4};
  }

  &:checked {
      background-color: gray;
  }
`

export const Information = styled.div`
  margin: .7rem 0;
`