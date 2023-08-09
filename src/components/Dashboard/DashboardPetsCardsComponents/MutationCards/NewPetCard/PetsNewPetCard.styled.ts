import styled from "styled-components"

export const NetPetFormWrapper = styled.div`
    width: 100%;
    max-width: 56rem;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 4rem 2.4rem 1.6rem 2.4rem;
`

export const Form = styled.form``

export const FormListWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1.6rem;
`

export const FormListItem = styled.div`
    width: 50%;
`