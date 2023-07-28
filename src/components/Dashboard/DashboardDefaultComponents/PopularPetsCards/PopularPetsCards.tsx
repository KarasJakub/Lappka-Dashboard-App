import * as S from "./PopularPetsCards.styled"
import CardHeading from "components/global/CardHeading/CardHeading"
import PopularPetCard from "./PopularPetCard/PopularPetCard"
import DogPhoto from "assets/photos/DogPhoto.png"

const PopularPetsCardsContent = [
  {
    image: DogPhoto,
    name: "Ninka",
    race: "Kot",
    views: "11,2",
  },
  {
    image: DogPhoto,
    name: "Ninka",
    race: "Kot",
    views: "1,1",
  },
  {
    image: DogPhoto,
    name: "Hudson",
    race: "Pies",
    views: "1,0",
  },
  {
    image: DogPhoto,
    name: "Frank",
    race: "Pies",
    views: "0,5",
  },
  {
    image: DogPhoto,
    name: "Jazzy",
    race: "Pies",
    views: "0,2",
  },
]

const PopularPetsCards = () => {
  return (
    <S.PopularPetsRootWrapper>
      <CardHeading title="Najpopularniejsze" />
      <S.PopularPetsInnerWrapper>
        {PopularPetsCardsContent.slice(0, 5).map((pet, index) => (
          <PopularPetCard
            key={index}
            image={pet.image}
            name={pet.name}
            race={pet.race}
            views={pet.views}
          />
        ))}
      </S.PopularPetsInnerWrapper>
    </S.PopularPetsRootWrapper>
  )
}

export default PopularPetsCards
