import * as S from "./DashboardPetsCardsSubpage.styled"
import DashboardNumberCard from "../DashboardDefaultComponents/DashboardNumberCard/DashboardNumberCard"
// import { CardsContent } from "../DashboardDefaultComponents/DashboardInitialSubpage/DashboardInitialSubpage"
import PetsTable from "./PetsTable/PetsTable"

const DashboardPetsCardsSubpage = () => {
  return (
    <S.DashboardPetsSubpageWrapper>
      {/* <S.NumberCardsWrapper>
        {CardsContent.slice(0, 3).map((card) => (
          <DashboardNumberCard
            icon={card.icon}
            title={card.title}
            count={card.price}
          />
        ))}
      </S.NumberCardsWrapper> */}
      <PetsTable />
    </S.DashboardPetsSubpageWrapper>
  )
}

export default DashboardPetsCardsSubpage
