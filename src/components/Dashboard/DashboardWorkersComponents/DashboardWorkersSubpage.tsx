import * as S from "./DashboardWorkersSubpage.styled"
import WorkersTable from "./WorkersTable/WorkersTable"
const DashboardWorkersSubpage = () => {
  return (
    <S.DashboardWorkersSubpageWrapper>
      <WorkersTable />
    </S.DashboardWorkersSubpageWrapper>
  )
}

export default DashboardWorkersSubpage
