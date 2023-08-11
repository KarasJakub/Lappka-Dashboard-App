import styled from "styled-components"

export const NewPetFormWrapper = styled.div`
    width: 100%;
    max-width: 56rem;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 4rem 2.4rem 0 2.4rem;
    border-radius: .8rem;
    box-shadow: 0px 12px 24px 0px #5B68713D;
    box-shadow: 0px 0px 1px 0px #1A202452;
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