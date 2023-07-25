import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const NavigationItem = styled.li`
    display: flex;
    align-items: center;
    gap: 1.5rem;

`
export const StyledNavLink = styled(NavLink)`
    width: 100%;
    max-width: 23rem;
    padding: .8rem 1.2rem;
    border-radius: 6px;

        &.active {
        background-color: ${({ theme }) => theme.colors.primaryPr200}
    }
`