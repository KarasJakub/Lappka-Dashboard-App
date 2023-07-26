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
          <div style={{ height: "100%" }}>{children}</div>
        </S.DashboardRightSection>
      </S.DashboardWrapper>
    </>
  )
}

export default DashboardLayout
