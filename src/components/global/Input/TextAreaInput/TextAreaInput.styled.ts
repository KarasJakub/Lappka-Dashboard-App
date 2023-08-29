import { styled } from 'styled-components'
import { getInputPaddingSize, getInputMarginSize } from 'helpers/utils/getStyles'
import theme from 'layout/theme'

  interface StylingProps {
    variant?: string
    maxWidth?: string
    margin?: string
    isCustomPlaceholder?: boolean
  }

export const TextAreaWrapper = styled.div`
  width: 100%;
`

export const Information = styled.div`
  margin: -1rem 0 1rem 0;
`

export const TextAreaComponentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`

export const TextAreaComponent = styled.textarea<StylingProps>`
  width: 100%;
  padding: ${({ variant }) => getInputPaddingSize(variant)};
  margin: ${({ margin }) => getInputMarginSize(margin)};
  font-size: 1.4rem;
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.lightGray1};
  border-radius: .5rem;
  max-width: ${({ maxWidth }) => maxWidth};
  resize: none;

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
