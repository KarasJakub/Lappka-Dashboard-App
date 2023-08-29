import styled from "styled-components"

export const DashboardVoluntarySubpageWrapper = styled.section`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.lightGray5};
    padding: 2.5rem;

    ${({ theme }) => theme.MQ.tablet} {
        height: calc(100vh - 56px);
    }
`