import * as S from "./DashboardInitialSubpage.styled"
import DashboardNumberCard from "../DashboardNumberCard/DashboardNumberCard"
import { ReactComponent as IdentifierCardIcon } from "assets/icons/IdentifierCardIcon.svg"
import { ReactComponent as GlassIcon } from "assets/icons/GlassIcon.svg"
import { ReactComponent as UserIcon } from "assets/icons/UserIcon.svg"
import { ReactComponent as HeartIcon } from "assets/icons/HeartDashboardIcon.svg"
import TableStats from "components/Dashboard/DashboardDefaultComponents/TableStats/TableStats"
import VoluntaryCard from "../VoluntaryCard/VoluntaryCard"
import { ReactComponent as StatusIcon } from "assets/icons/StatusIcon.svg"
import theme from "layout/theme"

const CardsContent = [
  {
    icon: <IdentifierCardIcon />,
    title: "Karty zwierząt",
    price: "235",
  },
  {
    icon: <GlassIcon />,
    title: "Szuka właściciela",
    price: "35",
  },
  {
    icon: <UserIcon />,
    title: "Z właścicielem",
    price: "200",
  },
  {
    icon: <HeartIcon />,
    title: "Wolontariat (ilość osób)",
    price: "25",
  },
]

const DashboardInitialSubpage = () => {
  return (
    <S.DashboardInitialSubpageWrapper>
      <S.NumberCardsWrapper>
        {CardsContent.map((card, index) => (
          <DashboardNumberCard
            key={index}
            icon={card.icon}
            title={card.title}
            price={card.price}
          />
        ))}
      </S.NumberCardsWrapper>
      <S.RechartsVoluntaryWrapper>
        <TableStats />
        <VoluntaryCard />
      </S.RechartsVoluntaryWrapper>
    </S.DashboardInitialSubpageWrapper>
  )
}

export default DashboardInitialSubpage
