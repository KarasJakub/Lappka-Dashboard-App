import Typography from "components/global/Typography/Typography"
import * as S from "./VoluntaryCard.styled"
import { useVolunteeringStatsHandler } from "api/volunteering/volunteeringHooks"
import VoluntaryCardItem from "./VoluntaryCardItem"

const VoluntaryCard = () => {
  const { data, isSuccess, isError } = useVolunteeringStatsHandler()
  return (
    <S.CardWrapper>
      <S.Title>
        <Typography tag="h5" variant="Heading18SemiBold">
          Wolontariat
        </Typography>
      </S.Title>
      {isSuccess && (
        <>
          <VoluntaryCardItem
            title="Wpłać darowiżnę"
            active={data.isDonationActive}
          />
          <VoluntaryCardItem
            title="Codzienna pomoc"
            active={data.isDailyHelpActive}
          />
          <VoluntaryCardItem
            title="Wyprowadzanie psów"
            active={data.isTakingDogsOutActive}
          />
        </>
      )}
      {isError && (
        <div style={{ padding: "1rem" }}>
          <Typography tag="p" variant="Heading18SemiBold" margin="Medium">
            Nie udało sie pobrać danych popularnych zwierząt schroniska,
            skontakuj się z administratorem
          </Typography>
        </div>
      )}
    </S.CardWrapper>
  )
}

export default VoluntaryCard
