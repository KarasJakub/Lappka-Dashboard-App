import styled from "styled-components"

export const NewestPetsRootWrapper = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 1px 2px 0px #1018280F;
    box-shadow: 0px 1px 3px 0px #1018281A;
    border-radius: .8rem;
`

export const NewestPetsInnerWrapper = styled.div`
    width: 100%;
    padding: 1.6rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.8rem;

    ${({ theme }) => theme.MQ.tablet} {
        flex-wrap: initial;
    }
`