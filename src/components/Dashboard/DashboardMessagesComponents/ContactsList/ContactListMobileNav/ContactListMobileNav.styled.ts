import styled from "styled-components"

interface MobileNavigationProps {
  isOpen: boolean
}

export const MobileNavigationWrapper = styled.nav<MobileNavigationProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: -120%;
  background-color: white;
  transform: ${({ isOpen }) => (isOpen ? "translateX(120%)" : "translateX(0)")}
    translateY(-50%);
  z-index: 10;
  transition: transform 0.3s ease-in-out;
  padding-top: 15rem;
`
