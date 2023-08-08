import styled from "styled-components"

interface MobileNavProps {
    isMobile?: boolean
}

export const ContactsListWrapper = styled.div<MobileNavProps>`
    width: 100%;
    max-width: ${({ isMobile }) => isMobile ? "100%" : "25.6rem"};
    /* height: ${({ isMobile }) => isMobile ? "calc(100vh - 80px)" : "calc(100vh - 56px)"}; */
    height: calc(100vh - 56px);
    background-color: ${({ theme }) => theme.colors.white};
    padding-top: 3rem;
    border-right: 1px solid ${({ theme }) => theme.colors.lightGray3};
`