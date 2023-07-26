import * as S from "./Dashboard.styled"
import SidebarNavigation from "./SideBarNavigation/SidebarNavigation"
import TopBar from "./TopBar/TopBar"

interface DashboardProps {
  children: React.ReactNode
}

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <>
      <S.DashboardWrapper>
        <SidebarNavigation />
        <S.DashboardRightSection>
          <TopBar />
          <div>{children}</div>
        </S.DashboardRightSection>
      </S.DashboardWrapper>
    </>
  )
}

export default Dashboard
