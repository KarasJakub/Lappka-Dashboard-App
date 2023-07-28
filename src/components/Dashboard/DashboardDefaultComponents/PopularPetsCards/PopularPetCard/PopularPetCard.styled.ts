import styled from "styled-components"

export const CardWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: .7rem 0 1rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray3};
`

export const CardImage = styled.img`
    width: 3.2rem;
    border-radius: 99rem;
`

export const LeftWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;
`

export const RightWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: .7rem;
`

export const TypographyWrapper = styled.div`
    display: flex;
    flex-direction: column;
`