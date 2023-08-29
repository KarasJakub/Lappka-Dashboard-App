import styled from "styled-components"

export const AccountSettingsRootWrapper = styled.section`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.lightGray5};
    padding: 2.5rem;
`

export const AccountSettingsComponent = styled.div`
    width: 100%;
    max-width: 56rem;
    background-color: ${({ theme }) => theme.colors.white};
`

export const InnerWrapper = styled.div`
    padding: 4rem 2.4rem;
`

export const InputsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1.6rem;
`

export const UserPhotoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;
    margin: 1.6rem 0;
`