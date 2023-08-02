import styled from "styled-components"

export const PetCardWrapper = styled.div`
    width: 100%;
    max-width: 23rem;
    border-radius: .7rem;
    box-shadow: 0px 1px 2px 0px #1018280F;
    box-shadow: 0px 1px 3px 0px #1018281A;
`

export const Image = styled.img`
    width: 100%;
    border-radius: .7rem .7rem 0 0;
`

export const ContentBar = styled.div`
    padding: .8rem 1.2rem;
    background-color: ${({ theme }) => theme.colors.white};
`

export const BottomTypography = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`