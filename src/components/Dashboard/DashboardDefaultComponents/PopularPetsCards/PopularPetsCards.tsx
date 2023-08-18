import * as S from "./PopularPetsCards.styled"
import CardHeading from "components/global/CardHeading/CardHeading"
import PopularPetCard from "./PopularPetCard/PopularPetCard"
import { useQuery } from "@tanstack/react-query"
import { mostPopularPetsHandler } from "api/DashboardCalls/DashboardCalls"
import Typography from "components/global/Typography/Typography"

const PopularPetsCards = () => {
  const { isSuccess, data, isError } = useQuery({
    queryKey: ["shelterPopular"],
    queryFn: () => mostPopularPetsHandler(),
  })
  return (
    <S.PopularPetsRootWrapper>
      <CardHeading title="Najpopularniejsze" />
      <S.PopularPetsInnerWrapper>
        {isSuccess &&
          data &&
          data.items
            .slice(0, 5)
            .map((pet) => (
              <PopularPetCard
                image={pet.image}
                name={pet.name}
                race={pet.race}
                views={pet.views}
              />
            ))}
        {isError && (
          <Typography tag="p" variant="Heading18SemiBold">
            Nie udało sie pobrać danych popularnych zwierząt schroniska,
            skontakuj się z administratorem
          </Typography>
        )}
      </S.PopularPetsInnerWrapper>
    </S.PopularPetsRootWrapper>
  )
}

export default PopularPetsCards
