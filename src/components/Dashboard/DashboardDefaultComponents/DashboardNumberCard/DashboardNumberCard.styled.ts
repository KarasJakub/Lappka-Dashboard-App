import styled from "styled-components"

export const CardWrapper = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 1.6rem;
    border-radius: .8rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    box-shadow: 0px 1px 2px 0px #1018280F;
    max-height: 8rem;
    box-shadow: 0px 1px 3px 0px #1018281A;

    ${({ theme }) => theme.MQ.tablet} {
        max-width: 45%;
    }

    ${({ theme }) => theme.MQ.largeLaptop} {
        max-width: unset;
    }
`

export const GreenCircle = styled.div`
    width: 4rem;
    height: 4rem;
    background-color: green;
    border-radius: 2rem;
    display: grid;
    place-items: center;
    background-color: ${({ theme }) => theme.colors.primaryPr200};
`

export const TextWrapper = styled.div``