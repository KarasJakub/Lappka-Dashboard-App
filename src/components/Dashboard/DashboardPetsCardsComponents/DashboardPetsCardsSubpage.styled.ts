import styled from "styled-components"

export const DashboardPetsSubpageWrapper = styled.section`
    width: 100%;
    height: calc(100vh - 56px);
    background-color: ${({ theme }) => theme.colors.lightGray5};
    padding: 2.5rem;
`

export const NumberCardsWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 1.6rem;
    margin-bottom: 1.6rem;
`