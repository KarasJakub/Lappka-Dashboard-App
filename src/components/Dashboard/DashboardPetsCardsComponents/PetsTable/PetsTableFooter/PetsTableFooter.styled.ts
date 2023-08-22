import styled, { css } from "styled-components"

interface PaginationButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const TableFooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0 0 .7rem .7rem;
  padding: 1rem 1.6rem;
  ${({ theme }) => theme.MQ.largeLaptop} {
    padding: 1rem .4rem;
  }
`
export const TableFooterButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: .4rem;
  padding: .4rem .6rem;
`

export const TableNumberButton = styled.button<PaginationButtonInterface>`
  background: ${({ active, theme }) =>
    active ? theme.colors.lightGray3 : theme.colors.white};
    border-radius: .4rem;
  padding: .4rem .6rem;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.colors.darkGray2};
  transition: all 0.3s ease-in-out;
  border: none;
  cursor: pointer;
`

export const TableArrowButton = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  background: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  & path {
    stroke: ${({ theme }) => theme.colors.midGray5};
    fill: ${({ theme }) => theme.colors.midGray5};
    ${({ disabled }) =>
      disabled &&
      css`
        opacity: 0.5;
      `}
  }
`

export const AnimalCardsPageSizeSelect = styled.select`
  padding: .8rem;
  border: 1px solid #ccc;
  border-radius: .4rem;
  outline: none;
`;