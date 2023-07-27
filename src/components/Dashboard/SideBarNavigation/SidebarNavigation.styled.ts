import styled from "styled-components"

export const DashboardSideBar = styled.div`
    padding: 2rem 1.2rem 3rem 1.2rem;
    width: 100%;
    height: 100vh;
    max-width: 25.6rem;
    border-right: 1px solid ${({ theme }) => theme.colors.lightGray3};
    display: flex;
    flex-direction: column;
    position: relative;
    /* justify-content: space-between; */
    display: none;

    ${({ theme }) => theme.MQ.tablet} {
        display: flex;
    }
`

export const NavigationWrapper = styled.nav`
`

export const NavigationList = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    margin-top: 4rem;
`

export const OrganizationPositionWrapper = styled.div`
    align-self: flex-start;
    padding: 1rem 1.2rem 1.2rem .6rem;
`