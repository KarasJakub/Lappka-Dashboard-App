import {  styled } from 'styled-components'
import { getInputPaddingSize, getInputMarginSize } from 'helpers/utils/getStyles'
import theme from 'layout/theme'

  interface StylingProps {
    variant?: string
    maxWidth?: string
    margin?: string
    isCustomPlaceholder?: boolean
  }

export const StyledInputTextWrapper = styled.div`
  width: 100%;
`

export const Information = styled.div`
  margin: -1rem 0 1rem 0;
`

export const StyledInputComponentWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

export const StyledInputComponent = styled.input<StylingProps>`
  padding: ${({ variant }) => getInputPaddingSize(variant)};
  margin: ${({ margin }) => getInputMarginSize(margin)};
  font-size: 1.4rem;
  border: none;
  border: ${props => (props.isCustomPlaceholder ? "none" : `1px solid ${theme.colors.lightGray1}` )};
  border-radius: .5rem;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  z-index: 2;

  &::placeholder {
    color: ${props => (props.isCustomPlaceholder ? theme.colors.black : theme.colors.midGray4)};
  }

  &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.statusFocus};
  }

  &:disabled {
      background-color: ${({ theme }) => theme.colors.lightGray4};
  }

  &:checked {
      background-color: pink;
  }
`

export const UnitWrapper = styled.div`
  position: relative;
`

export const Unit = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: calc(100% - 1.6rem);
  background-color: ${({ theme }) => theme.colors.lightGray5};
  border-radius: 0 .5rem .5rem 0;
  padding: .8rem 1.6rem;
  display: grid;
  place-items: center;
  z-index: 1;
  border: 1px solid ${({ theme }) => theme.colors.lightGray1};
  border-left: unset;
`