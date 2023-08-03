import * as S from "./DashboardPetsCardsSubpage.styled"
import DashboardNumberCard from "../DashboardDefaultComponents/DashboardNumberCard/DashboardNumberCard"
import { CardsContent } from "../DashboardDefaultComponents/DashboardInitialSubpage/DashboardInitialSubpage"

const DashboardPetsCardsSubpage = () => {
  return (
    <S.DashboardPetsSubpageWrapper>
      <S.NumberCardsWrapper>
        {CardsContent.slice(0, 3).map((card) => (
          <DashboardNumberCard
            icon={card.icon}
            title={card.title}
            price={card.price}
          />
        ))}
      </S.NumberCardsWrapper>
    </S.DashboardPetsSubpageWrapper>
  )
}

export default DashboardPetsCardsSubpage
