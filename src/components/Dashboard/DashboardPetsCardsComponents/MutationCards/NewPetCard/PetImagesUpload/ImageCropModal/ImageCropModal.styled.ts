import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(61, 61, 61, 0.4);
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 51.3rem;
    max-width: 68.4rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: .8rem;
    box-shadow: 0px 24px 32px 0px rgba(91, 104, 113, 0.24);
    box-shadow: 0px 0px 1px 0px rgba(26, 32, 36, 0.32);
    position: relative;
    z-index: 2;
`