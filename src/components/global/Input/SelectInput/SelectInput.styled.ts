import styled from "styled-components"
import { getInputPaddingSize, getInputMarginSize } from 'helpers/utils/getStyles'

interface StylingProps {
  variant?: string
  margin?: string
}

export const SelectWrapper = styled.div<StylingProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .4rem;
  position: relative;
  font-size: 1.4rem;
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.lightGray1};
  border-radius: .5rem;
  padding: ${({ variant }) => getInputPaddingSize(variant)};
  margin: ${({ margin }) => getInputMarginSize(margin)};
  cursor: pointer;
`

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TextContent = styled.div``

export const IconWrapper = styled.div`
  transition: ease-in-out .2s;
  cursor: pointer;

  &.rotate {
    transform: rotate(180deg);
    transform-origin: 50% 70%;
  }
`

export const BottomSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  display: none;
  /* transform: translateY(-100%); */
  position: absolute;
  top: 3.3rem;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: .8rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray1};
  border-radius: .6rem;
  box-shadow: 0px 12px 24px 0px rgba(91, 104, 113, 0.24);
  box-shadow: 0px 0px 1px 0px rgba(26, 32, 36, 0.32);
  z-index: 15;
  /* transition: ease-in-out .2s; */

  &.open {
    display: block;
    /* transform: translateY(0%); */
  }
`

export const List = styled.ul`
  padding: 2rem 1.6rem;
  list-style: none;
`

export const ListElement = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

// removed animations in progress because css stacking is making me nervous