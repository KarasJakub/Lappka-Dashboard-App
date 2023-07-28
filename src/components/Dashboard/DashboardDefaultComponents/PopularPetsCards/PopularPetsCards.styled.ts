import styled from "styled-components"

export const PopularPetsRootWrapper = styled.div`
    width: 100%;
    max-width: 37rem;
    background-color: ${({ theme }) => theme.colors.white};
`

export const PopularPetsInnerWrapper = styled.div`
    width: 100%;
    padding: 2rem 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`