import styled from "styled-components"

export const Form = styled.form`
    width: 100%;
    margin: 2.4rem 0 0 0;
`

export const PostalCodeCityWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.6rem;
`

export const InputTypographyVerticalWrapper = styled.div`
    width: 100%;
`

export const ProgressBarWrapper = styled.div`
    width: 100%;
    margin-top: 3rem;
`

export const ProgressBarTopWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
`

export const TypographySecondWrapper = styled.div`
    position: absolute;
    left: 50%;
`

export const ProgressBarBottomWrapper = styled.div`
    display: flex;
    margin-top: 1rem;
    position: relative;
`

export const ProgressBarDot = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.lightGray2};
    margin: 0 .2rem;

    &.isPrev {
        &:after {
        content: "";
        position: relative;
        top: 50%;
        left: 2rem;
        z-index: 1;
        display: block;
        width: 12rem;
        height: .2rem;
        background-color: ${({ theme }) => theme.colors.lightGray2};

        ${({ theme }) => theme.MQ.tablet} {
            width: 15rem;
        }
      }
    }

    &.isSecond {
        &:after {
        background-color: ${({ theme }) => theme.colors.primaryPr500};
      }
    }

    &.active {
        background-color: ${({ theme }) => theme.colors.primaryPr500};
        outline: 2px solid ${({ theme }) => theme.colors.primaryPr500};
        outline-offset: 2px;
      }

    &.second {
        left: 50%;
    }

    &.third {
        right: 0;
    }

`

export const RegisterButtonsWrapper = styled.div`
    display: flex;
    gap: 2.4rem;
`