import styled from "styled-components"

export const Tooltip = styled.div`
    max-width: 5rem;
    padding: 0.4rem 0.8rem;
    border-radius: 0.4rem;
    background-color: ${({ theme }) => theme.colors.darkGray3};
    box-shadow: 0px 8px 16px 0px rgba(91, 104, 113, 0.24);
    box-shadow: 0px 0px 1px 0px rgba(26, 32, 36, 0.32);
    position: relative;
    z-index: 2;

    &:before {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.colors.darkGray3};
    width: 1.5rem;
    height: 1.5rem;
    transform: translateX(-50%) rotate(45deg);
    top: 1.2rem;
    left: 50%;
    z-index: -1;
    }
`