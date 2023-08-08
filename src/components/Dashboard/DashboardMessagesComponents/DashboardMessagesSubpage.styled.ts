import styled from "styled-components"

export const MessagesSubpageWrapper = styled.section`
    width: 100%;
    height: calc(100vh - 56px);
    display: flex;
`

export const ContactListWrapper = styled.div`
    width: 100%;
    max-width: 25.6rem;
    display: none;
    ${({ theme }) => theme.MQ.tablet} {
        display: block;
    }
`