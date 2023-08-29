import * as S from "./DashboardLayout.styled"
import SidebarNavigation from "./SideBarNavigation/SidebarNavigation"
import TopBar from "./TopBar/TopBar"

interface DashboardLayoutProps {
  children: React.ReactNode
  isSettingsExpanded?: boolean
}

const DashboardLayout = ({
  children,
  isSettingsExpanded,
}: DashboardLayoutProps) => {
  return (
    <>
      <S.DashboardWrapper>
        <SidebarNavigation />
        <S.DashboardRightSection isSettingsExpanded={isSettingsExpanded}>
          <TopBar />
          <S.ChildrenContentWrapper>{children}</S.ChildrenContentWrapper>
        </S.DashboardRightSection>
      </S.DashboardWrapper>
    </>
  )
}

export default DashboardLayout
