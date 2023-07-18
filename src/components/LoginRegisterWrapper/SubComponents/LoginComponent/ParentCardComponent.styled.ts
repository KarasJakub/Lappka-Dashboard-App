import { styled } from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    max-width: 45rem;
    padding: 3.2rem;
    border: 1px solid  ${({ theme }) => theme.colors.lightGray4};
    border-radius: .8rem;
    box-shadow: 0px 1px 3px 0px rgba(66, 68, 90, .1);
    background-color: ${({ theme }) => theme.colors.white};
`