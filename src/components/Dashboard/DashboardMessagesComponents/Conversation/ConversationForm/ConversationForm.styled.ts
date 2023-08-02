import styled from "styled-components"

export const FormWrapper = styled.div`
    width: 100%;
    padding: 1.4rem 2.4rem;
    max-height: 6.4rem;
    background-color: ${({ theme }) => theme.colors.white};
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`