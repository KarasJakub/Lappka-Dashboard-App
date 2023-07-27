import styled from "styled-components"

export const RadioLabel = styled.label`
  display: flex;
  cursor: pointer;
`

export const RadioInput = styled.input`
    appearance: none;
    width: 2rem;
    height: 2rem;
    background-color: ${({ theme }) => theme.colors.lightGray5};
    border: 1px solid ${({ theme }) => theme.colors.lightGray1};
    display: inline-block;
    border-radius: 0.25rem;
    margin-right: .8rem;
    vertical-align: middle;
    border-radius: 100%;
    position: relative;

    &:checked {
        background-color: ${({ theme }) => theme.colors.primaryPr500};
        border: none;
    }


    &:checked:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 8px;
        height: 8px;
        background-color: white;
        border-radius: 100%;
    }
`