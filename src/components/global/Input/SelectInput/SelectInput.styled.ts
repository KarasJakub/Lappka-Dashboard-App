import styled from "styled-components"

export const SelectWrapper = styled.div`

&.customSelect {
  display: flex;
  flex-direction: column;
  gap: .4rem;
  position: relative;
  width: 100%;
  margin-bottom: 1.6rem;
}
`

export const TopSection = styled.div`
      &.select {
    border-radius: .6rem;
    border: 1px solid rgba(213, 218, 221, 1);
    padding: 1.2rem 1.6rem;
    font-size: 1.4rem;
    font-weight: 400;
    position: relative;
    cursor: pointer;
  }
`

export const TextContent = styled.p`
  &.placeholder {
      color: ${({ theme }) => theme.colors.midGray4};
    }
`

export const IconWrapper = styled.span`
    &.customArrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 1.5rem;
      width: 1.6rem;
      height: 1.6rem;
      transition: ease-in-out .25s;
      cursor: pointer;
      }

      &.rotate {
        transform: rotate(-180deg);
    }

`

export const BottomSection = styled.div`
  &.selectMenu {
    background-color: white;
    margin-top: .8rem;
    display: none;
    list-style: none;
    border: 1px solid rgba(213, 218, 221, 1);
    padding: 1.2rem 0;
    border-radius: .6rem;
    box-shadow: 0px 12px 24px 0px rgba(91, 104, 113, 0.24);
    box-shadow: 0px 0px 1px 0px rgba(26, 32, 36, 0.32);
    position: absolute;
      top: 6rem;
      left: 0;
      width: 100%;
      z-index: 100;
  }

  &.open {
    display: flex;
    flex-direction: column;
  }
`