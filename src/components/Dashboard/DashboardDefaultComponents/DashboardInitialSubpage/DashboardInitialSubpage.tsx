import * as S from "./DashboardInitialSubpage.styled"
import DashboardNumberCard from "../DashboardNumberCard/DashboardNumberCard"
import { ReactComponent as IdentifierCardIcon } from "assets/icons/IdentifierCardIcon.svg"
import { ReactComponent as GlassIcon } from "assets/icons/GlassIcon.svg"
import { ReactComponent as UserIcon } from "assets/icons/UserIcon.svg"
import { ReactComponent as HeartIcon } from "assets/icons/HeartDashboardIcon.svg"
import TableStats from "components/Dashboard/DashboardDefaultComponents/TableStats/TableStats"
import VoluntaryCard from "../VoluntaryCard/VoluntaryCard"
import NewestPetsCards from "../NewestPetsCards/NewestPetsCards"
import PopularPetsCards from "../PopularPetsCards/PopularPetsCards"
import { useQuery } from "@tanstack/react-query"
import { wait } from "@testing-library/user-event/dist/utils"
import { GetCards } from "api/ShelterStats"

export const CardsContent = [
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
  const CardsQuery = useQuery({
    queryKey: ["cards"],
    queryFn: () => GetCards(),
  })

  return (
    <S.DashboardInitialSubpageWrapper>
      <S.NumberCardsWrapper>
        {CardsQuery.data?.map((card: any, index: number) => (
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
      <S.PetsWrapper>
        <NewestPetsCards />
        <PopularPetsCards />
      </S.PetsWrapper>
    </S.DashboardInitialSubpageWrapper>
  )
}

export default DashboardInitialSubpage
