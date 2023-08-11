import styled from "styled-components"

export const ImageWrapper = styled.div`
    max-width: 5.6rem;
    max-height: 7.2rem;
    position: relative;
`

export const IconWrapper = styled.div`
    display: flex;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: white;
    padding: 0.3rem;
    border-radius: 3px;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    cursor: pointer;
`

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 8px;
`