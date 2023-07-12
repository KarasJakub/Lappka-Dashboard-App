import { styled } from "styled-components"

interface StylingProps {
    color?: string
    margin?: string
    padding?: string
}

const TypographyComponent = styled.p<StylingProps>`
    font-family: ${({ theme }) => theme.font.primary};
    color: ${({ color }) => color};
    margin: ${({ margin }) => margin};
    padding: ${({ padding }) => padding};

    &.Heading30Semi {
        font-weight: ${({ theme }) => theme.weight.semiBold};
        font-size: 3rem;
        line-height: 4rem;
        letter-spacing: -0.8%;
    }

    &.Heading24SemiBold {
        font-weight: ${({ theme }) => theme.weight.semiBold};
        font-size: 2.4rem;
        line-height: 3.2rem;
        letter-spacing: -1.9%;
    }

    &.Heading20SemiBold {
        font-weight: ${({ theme }) => theme.weight.semiBold};
        font-size: 2rem;
        line-height: 2.6rem;
        letter-spacing: -1%;
    }

    &.Heading18SemiBold {
        font-weight: ${({ theme }) => theme.weight.semiBold};
        font-size: 1.8rem;
        line-height: 2.4rem;
        letter-spacing: -1.4%;
    }

    &.UIText16SemiBold {
        font-weight: ${({ theme }) => theme.weight.semiBold};
        font-size: 1.6rem;
        line-height: 2.4rem;
        letter-spacing: -0.4%;
    }

    &.UIText16MediumButton {
        font-weight: ${({ theme }) => theme.weight.medium};
        font-size: 1.6rem;
        line-height: 2.4rem;
        letter-spacing: -0.4%;
    }

    &.UIText14Reg {
        font-weight: ${({ theme }) => theme.weight.regular};
        font-size: 1.4rem;
        line-height: 2.4rem;
        letter-spacing: -0.6%;
    }

    &.UIText14SemiBold {
        font-weight: ${({ theme }) => theme.weight.semiBold};
        font-size: 1.4rem;
        line-height: 2.4rem;
        letter-spacing: -0.6%;
    }

    &.UIText14Med {
        font-weight: ${({ theme }) => theme.weight.medium};
        font-size: 1.4rem;
        line-height: 2rem;
        letter-spacing: -0.3%;
    }

    &.UITableNumbers14Reg {
        font-weight: ${({ theme }) => theme.weight.regular};
        font-size: 1.4rem;
        line-height: 2.4rem;
        letter-spacing: -0.6%;
    }

    &.UIText13Med {
        font-weight: ${({ theme }) => theme.weight.medium};
        font-size: 1.3rem;
        line-height: 1.8rem;
        letter-spacing: 0%;
    }

    &.UIText13Reg {
        font-weight: ${({ theme }) => theme.weight.regular};
        font-size: 1.3rem;
        line-height: 1.6rem;
        letter-spacing: 0%;
    }

    &.UIText12Reg {
        font-weight: ${({ theme }) => theme.weight.regular};
        font-size: 1.2rem;
        line-height: 1.6rem;
        letter-spacing: 0%;
    }

    &.UIText12SemiBold {
        font-weight: ${({ theme }) => theme.weight.semiBold};
        font-size: 1.2rem;
        line-height: 1.6rem;
        letter-spacing: 0%;
    }
`

export default TypographyComponent