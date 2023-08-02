import styled from "styled-components"

export const CardHeadingWrapper = styled.div`
    width: 100%;
    max-height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 1.2rem 1.6rem;
    border-radius: .7rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray3};
    position: relative;
`