import styled from "styled-components"


export const CardFooterWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.6rem;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 1.6rem 2.4rem;
    border-radius: 0 0 .7rem .7rem;
    border-top: 1px solid ${({ theme }) => theme.colors.lightGray3};
`