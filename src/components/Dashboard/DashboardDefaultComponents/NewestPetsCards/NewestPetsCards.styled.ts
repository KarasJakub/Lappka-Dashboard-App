import styled from "styled-components"

export const NewestPetsRootWrapper = styled.div`
    width: 100%;
    max-width: 75rem;
    background-color: ${({ theme }) => theme.colors.white};
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