import styled from "styled-components"

export const PopularPetsRootWrapper = styled.div`
    width: 100%;

    max-height: 36rem;
    margin-top: 1.6rem;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 1px 2px 0px #1018280F;
    box-shadow: 0px 1px 3px 0px #1018281A;
    border-radius: .8rem;

    ${({ theme }) => theme.MQ.largeLaptop} {
        margin-top: unset;
        max-width: 37rem;
    }
`

export const PopularPetsInnerWrapper = styled.div`
    width: 100%;
    padding: 2rem 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`