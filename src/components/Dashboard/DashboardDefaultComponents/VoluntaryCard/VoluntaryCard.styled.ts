import styled from "styled-components"

export const CardWrapper = styled.aside`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 2px 4px 0px #5B687114;
    border-radius: .7rem;

    ${({ theme }) => theme.MQ.laptop} {
        max-width: 27rem;
    }
`

export const Title = styled.div`
    padding: 1.2rem 1.6rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray3};
`

export const SubCard = styled.div`
    margin: 1.4rem 1.6rem 0 1.6rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray3};
    padding-bottom: 1.3rem;
`

export const StatusWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;
    margin-left: 1.6rem;
    margin-top: .8rem;
`