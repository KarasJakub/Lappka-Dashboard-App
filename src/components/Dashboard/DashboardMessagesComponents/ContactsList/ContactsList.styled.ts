import styled from "styled-components"

export const ContactsListWrapper = styled.div`
    width: 100%;
    max-width: 25.6rem;
    height: calc(100vh - 56px);
    background-color: ${({ theme }) => theme.colors.white};
    padding-top: 3rem;
    border-right: 1px solid ${({ theme }) => theme.colors.lightGray3};
`