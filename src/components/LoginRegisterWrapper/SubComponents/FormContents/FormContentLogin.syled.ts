import styled from "styled-components"

export const Form = styled.form`
    width: 100%;
    margin: 4rem 0 0 0;
`

export const AdditionalOptionsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Checkbox = styled.input`
    &:checked {
        background-color: pink;
    }
`

export const CheckBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;
`

export const PasswordLink = styled.a`
    color: ${({ theme }) => theme.colors.primaryPr600};
    text-underline-offset: .5rem;
    text-decoration-color: ${({ theme }) => theme.colors.primaryPr500};
`

export const MultiLoginHeading = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 2.4rem;

    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        display: inline-block;
        width: 30%;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.lightGray4};
    }

        &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        display: inline-block;
        width: 30%;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.lightGray4};
    }
`

export const ButtonsWrapper = styled.div`
    margin-top: 2.4rem;
    display: flex;
    gap: 1.6rem;
`

export const SocialButtonWrapper = styled.div`
    width: 50%;

`