import * as S from "./PopularPetsCards.styled"
import CardHeading from "components/global/CardHeading/CardHeading"
import PopularPetCard from "./PopularPetCard/PopularPetCard"
import Typography from "components/global/Typography/Typography"
import { useMostPopularPetsHandler } from "api/pets/petsHooks"

const PopularPetsCards = () => {
  const { isSuccess, data, isError } = useMostPopularPetsHandler()
  return (
    <S.PopularPetsRootWrapper>
      <CardHeading title="Najpopularniejsze" />
      <S.PopularPetsInnerWrapper>
        {isSuccess &&
          data &&
          data.items
            .slice(0, 5)
            .map((pet, index) => (
              <PopularPetCard
                image={pet.image}
                name={pet.name}
                race={pet.race}
                views={pet.views}
                key={index}
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
