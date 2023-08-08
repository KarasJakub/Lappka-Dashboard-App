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
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1.6rem;
    margin-bottom: 1.6rem;

    ${({ theme }) => theme.MQ.tablet} {
        flex-direction: initial;
        flex-wrap: initial;
    }
`

export const TableGenderWrapper = styled.div`
    padding: 0 .8rem;
    border-radius: .7rem;
    max-width: 8rem;
    display: flex;
    justify-content: center;

    &.male {
        background-color: ${({ theme }) => theme.colors.midGray4};
    }

    &.female {
        background-color: ${({ theme }) => theme.colors.primaryPr500};
    }
`