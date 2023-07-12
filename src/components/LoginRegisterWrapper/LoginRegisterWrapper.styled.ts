import { styled } from 'styled-components'

export const LoginRegisterWrapper = styled.div`
    width: 100%;
    display: flex;
    height: 100vh;
`
export const Navigation = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    /* left: 50%;
    transform: translateX(-50%); */
    display: flex;
    justify-content: space-between;
    /* max-width: 120rem; */
    margin: 0 auto;
`

export const LoginContainer = styled.div`
    width: 50%;
    display: grid;
    place-items: center;
`

export const ImageContainer = styled.div`
    width: 50%;
    background-color: ${({ theme }) => theme.colors.primaryPr50};
    display: grid;
    place-items: center;
`