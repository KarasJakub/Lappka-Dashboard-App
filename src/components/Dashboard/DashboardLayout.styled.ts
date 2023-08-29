import styled from "styled-components"

interface StylingProps {
    isSettingsExpanded?: boolean
}

export const DashboardWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    overflow-x: hidden;
`
export const DashboardRightSection = styled.main<StylingProps>`
    width: 100%;
    height: ${({ isSettingsExpanded }) => (isSettingsExpanded ? "initial" : "100vh")};
`

export const ChildrenContentWrapper = styled.section`
    width: 100%;
    height: auto;
    overflow: hidden;

    ${({ theme }) => theme.MQ.largeLaptop} {
        height: calc(100% - 56px);
    }
`