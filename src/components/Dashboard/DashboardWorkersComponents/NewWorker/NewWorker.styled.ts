import styled from "styled-components"

export const NewWorkerRootWrapper = styled.section`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.lightGray5};
    padding: 2.5rem;

    ${({ theme }) => theme.MQ.tablet} {
        height: calc(100vh - 56px);
    }
`

export const NewWorkerInnerWrapper = styled.div`
    width: 100%;
    max-width: 56rem;
    background-color: ${({ theme }) => theme.colors.white};
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    margin-bottom: 2.4rem;
`

export const TopWrapper = styled.div`
    padding: 2.4rem 2.4rem .8rem 2.4rem;
`