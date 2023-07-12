import { styled } from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    max-width: 45rem;
    padding: 3.2rem;
    border: 1px solid  ${({ theme }) => theme.colors.lightGray4};
    border-radius: .5rem;
`