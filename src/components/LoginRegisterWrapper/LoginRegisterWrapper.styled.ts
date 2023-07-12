import { styled } from 'styled-components'

export const LoginRegisterWrapper = styled.div`
    width: 100%;
    display: flex;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.primaryPr50};

    ${({ theme }) => theme.MQ.laptop} {
            background-color: unset;
        }
`
export const Navigation = styled.nav`
    width: 100%;
    padding: 3.3rem 2rem 0 2rem;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 112rem;

    ${({ theme }) => theme.MQ.desktop} {
        max-width: 140rem;
    }
`

export const LoginContainer = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
    padding: 15rem 2rem 0 2rem;

    ${({ theme }) => theme.MQ.desktop} {
        width: 50%;
    }
`

export const ImageContainer = styled.div`
    width: 50%;
    background-color: ${({ theme }) => theme.colors.primaryPr50};
    display: grid;
    place-items: center;
    display: none;

    ${({ theme }) => theme.MQ.laptop} {
        display: grid;
    }
`

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 2.4rem;
`