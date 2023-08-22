import styled from "styled-components"

export const ActionButtonWrapper = styled.div`
    position: relative;
`

export const ActionToggleMenu = styled.div`
    position: absolute;
    left: -12rem;
    top: -5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 1.6rem;
    box-shadow: 0px 12px 24px 0px #5B68713D;
    box-shadow: 0px 0px 1px 0px #1A202452;
    border-radius: .7rem;
    z-index: 2;
`