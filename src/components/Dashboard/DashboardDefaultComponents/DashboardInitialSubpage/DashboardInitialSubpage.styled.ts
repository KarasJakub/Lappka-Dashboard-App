import styled from "styled-components"

export const DashboardInitialSubpageWrapper = styled.section`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.lightGray5};
    padding: 2.5rem;
`

export const NumberCardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
    margin-bottom: 1.6rem;
    ${({ theme }) => theme.MQ.tablet} {
        flex-direction: initial;
    }

    ${({ theme }) => theme.MQ.largeLaptop} {
        flex-wrap: unset;
    }
`

export const RechartsVoluntaryWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.6rem;
    margin-bottom: 1.6rem;

    ${({ theme }) => theme.MQ.largeLaptop} {
        flex-direction: row;
    }
`

export const PetsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`