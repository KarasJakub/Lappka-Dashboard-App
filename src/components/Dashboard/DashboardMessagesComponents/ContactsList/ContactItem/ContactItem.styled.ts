import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const ContactItemWrapper = styled(NavLink)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1.2rem;
    padding: 1.5rem 1.2rem 1.2rem 1.2rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray4};
    text-decoration: none;

    &.active {
        background-color: ${({ theme }) => theme.colors.primaryPr50};
        color: ${({ theme }) => theme.colors.primaryPr700};
    }
`

export const Image = styled.img`
    max-width: 3.2rem;
    border-radius: 3rem;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .2rem;
`

export const CounterWrapper = styled.div`
    align-self: flex-end;
`

export const LeftWrapper = styled.div`
    display: flex;
    gap: 1.2rem;
`