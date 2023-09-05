import * as S from "./NewestPetsCards.styled"
import CardHeading from "components/global/CardHeading/CardHeading"
import ButtonComponent from "components/global/Button/ButtonComponent.styled"
import NewPetCard from "./NewPetCard/NewPetCard"
import { newestPetsHandler } from "api/DashboardCalls/DashboardCalls"
import { useQuery } from "@tanstack/react-query"
import Typography from "components/global/Typography/Typography"
import { useNavigate } from "react-router-dom"
import ROUTES from "helpers/utils/routes"

const NewestPetsCards = () => {
  const navigate = useNavigate()
  const { isSuccess, data, isError } = useQuery({
    queryKey: ["shelterNewestPets"],
    queryFn: () => newestPetsHandler(),
  })
  return (
    <S.NewestPetsRootWrapper>
      <CardHeading title="Najnowsze karty zwierząt">
        <ButtonComponent
          className="secondary"
          size="Large"
          style={{ maxWidth: "9rem" }}
          onClick={() => navigate(ROUTES.pets)}
        >
          Wszystkie
        </ButtonComponent>
      </CardHeading>
      <S.NewestPetsInnerWrapper>
        {isSuccess &&
          data &&
          data.items
            .slice(0, 3)
            .map((pet, index) => (
              <NewPetCard
                image={pet.image}
                name={pet.name}
                race={pet.race}
                date={pet.date}
                key={index}
              />
            ))}
        {isError && (
          <Typography tag="p" variant="Heading18SemiBold">
            Nie udało sie pobrać danych najnowszych zwierząt schroniska,
            skontakuj się z administratorem
          </Typography>
        )}
      </S.NewestPetsInnerWrapper>
    </S.NewestPetsRootWrapper>
  )
}

export default NewestPetsCards
