import * as S from "./DashboardLayout.styled"
import SidebarNavigation from "./SideBarNavigation/SidebarNavigation"
import TopBar from "./TopBar/TopBar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <S.DashboardWrapper>
        <SidebarNavigation />
        <S.DashboardRightSection>
          <TopBar />
          <S.ChildrenContentWrapper>{children}</S.ChildrenContentWrapper>
        </S.DashboardRightSection>
      </S.DashboardWrapper>
    </>
  )
}

export default DashboardLayout
