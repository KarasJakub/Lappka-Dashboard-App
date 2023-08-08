import styled from "styled-components"

export const ConverstionWrapper = styled.section`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.lightGray5};
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ConversationInnerWrapper = styled.div`
    padding: 2.4rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const HeadingWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ConversationMobileNavWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

    ${({ theme }) => theme.MQ.tablet} {
        display: none;
    }
`