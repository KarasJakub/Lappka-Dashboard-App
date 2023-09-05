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
import { shelterDataHandler } from "api/DashboardCalls/DashboardCalls"
import Typography from "components/global/Typography/Typography"

const DashboardInitialSubpage = () => {
  const { isSuccess, data, isError } = useQuery({
    queryKey: ["shelterStats"],
    queryFn: () => shelterDataHandler(),
  })

  return (
    <S.DashboardInitialSubpageWrapper>
      <S.NumberCardsWrapper>
        {isSuccess && data && (
          <>
            <DashboardNumberCard
              icon={<IdentifierCardIcon />}
              title="Karty zwierząt"
              count={data.cardCount}
            />
            <DashboardNumberCard
              icon={<GlassIcon />}
              title="Szuka właściciela"
              count={data.toAdoptCount}
            />
            <DashboardNumberCard
              icon={<UserIcon />}
              title="Z właścicielem"
              count={data.adoptedCount}
            />
            <DashboardNumberCard
              icon={<HeartIcon />}
              title="Wolontariat (ilość osób)"
              count={data.volunteerCount}
            />
          </>
        )}
        {isError && (
          <Typography tag="p" variant="Heading18SemiBold">
            Nie udało sie pobrać danych statystycznych schroniska, skontakuj się
            z administratorem
          </Typography>
        )}
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
