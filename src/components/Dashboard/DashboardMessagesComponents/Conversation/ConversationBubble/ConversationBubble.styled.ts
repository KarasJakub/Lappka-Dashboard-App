import styled from "styled-components"

export const BubbleWrapper = styled.div`
    padding-bottom: 3.2rem;
    display: flex;

    &.isMe {
    justify-content: flex-end;
    }
`

export const BubblePhoto = styled.img`
    margin-right: 1.6rem;
    width: 3.2rem;
    height: 3.2rem;
`

export const BubbleItem = styled.div`
    padding: 1.4rem;
    max-width: 27rem;
    display: flex;
    gap: 1.4rem;

    &.isMe {
        background-color: ${({ theme }) => theme.colors.primaryPr500};
        color:  ${({ theme }) => theme.colors.white};
        border-radius: 1rem 0 1rem 1rem;
    }
    &.isNotMe {
        background-color: ${({ theme }) => theme.colors.white};
        color:  ${({ theme }) => theme.colors.black};
        border-radius: 0 1rem 1rem 1rem;
    }
`