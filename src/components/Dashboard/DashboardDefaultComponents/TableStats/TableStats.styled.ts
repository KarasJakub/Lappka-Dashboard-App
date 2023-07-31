import styled from "styled-components"

export const TableWrapper = styled.div`
    width: 100%;
    height: 100%;
    /* max-width: 135rem; */
    background-color: white;
    border-radius: .7rem;
    box-shadow: 0px 1px 2px 0px #1018280F;
    box-shadow: 0px 1px 3px 0px #1018281A;

`

export const ResponsiveContainerWrapper = styled.div`
    height: 28rem;
`

export const SelectModal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  gap: 0.8rem;
  width: 18rem;
  top: 8rem;
  right: 2rem;
  padding: 1.6rem;
  z-index: 50;
  background-color: white;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.06);
  box-shadow: 0px 1px 3px 0px rgba(16, 24, 40, 0.1);
  border-radius: 0.8rem;
`