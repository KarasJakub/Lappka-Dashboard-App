import styled from "styled-components"

export const EditCardWrapper = styled.div`
    width: 100%;
    max-width: 56rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: .8rem;
    box-shadow: 0px 1px 2px 0px #1018280F;
    box-shadow: 0px 1px 3px 0px #1018281A;
    padding: 2.4rem 2.4rem 0 2.4rem;
`

export const TopButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.4rem;
`

export const ImagesSectionWrapper = styled.div`
    display: flex;
    gap: 1.6rem;
    overflow-x: scroll;

    ${({theme }) => theme.MQ.tablet} {
        overflow-x: unset;
    }
`

export const Image = styled.img`
    max-width: 11.6rem;
    border-radius: 1.2rem;
`

export const ContentEditSection = styled.div`
    width: 100%;
    margin-top: 3.2rem;
`

export const Form = styled.form``

export const ContentRowWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${({theme }) => theme.MQ.tablet} {
        flex-direction: initial;
    }
`

export const InputStylingWrapper = styled.div`
    width: 100%;
    max-width: 25.4rem;
`