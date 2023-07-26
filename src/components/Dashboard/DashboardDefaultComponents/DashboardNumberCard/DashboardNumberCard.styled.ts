import styled from "styled-components"

export const CardWrapper = styled.div`
    width: 100%;
    max-width: 27rem;
    padding: 1.6rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    box-shadow: 0px 1px 2px 0px #1018280F;
    box-shadow: 0px 1px 3px 0px #1018281A;

`

export const GreenCircle = styled.div`
    width: 100%;
    max-width: 4rem;
    background-color: ${({ theme }) => theme.colors.primaryPr50};
    border-radius: 2rem;
`

export const TextWrapper = styled.div`

`