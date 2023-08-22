import styled from "styled-components"

export const PetsTableWrapper = styled.div`
    width: 100%;
    box-shadow: 0px 1px 2px 0px #1018280F;
    box-shadow: 0px 1px 3px 0px #1018281A;
    overflow-x: scroll;

    ${({ theme }) => theme.MQ.laptop} {
        overflow: unset;
    }
`

export const PetsTable = styled.table`
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    border-collapse: collapse;
`

export const PetsTableHeadingTr = styled.tr`
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray3};
`

export const PetsTableContentTr = styled.tr`
    &:nth-child(2n + 2) {
        background-color: ${({ theme }) => theme.colors.lightGray5};
    }
`

export const PetsTableHeadingTh = styled.th`
    padding: 1.1rem 1.6rem;
`

export const PetsTableContentTd = styled.td`
        padding: 1.1rem 1.6rem;
`