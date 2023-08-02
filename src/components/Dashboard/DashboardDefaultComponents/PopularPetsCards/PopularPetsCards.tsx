import * as S from "./PopularPetsCards.styled"
import CardHeading from "components/global/CardHeading/CardHeading"
import PopularPetCard from "./PopularPetCard/PopularPetCard"
import WhiteCatPhoto from "assets/photos/WhiteCatPhoto.png"
import BlackWhiteCatPhoto from "assets/photos/BlackWhiteCatPhoto.png"
import DogHudsonPhoto from "assets/photos/DogHudsonPhoto.png"
import DogFrankPhoto from "assets/photos/DogFrankPhoto.png"
import DogJazzyPhoto from "assets/photos/DogJazzyPhoto.png"

const PopularPetsCardsContent = [
  {
    image: WhiteCatPhoto,
    name: "Ninka",
    race: "Kot",
    views: "11200",
  },
  {
    image: BlackWhiteCatPhoto,
    name: "Ninka",
    race: "Kot",
    views: "1100",
  },
  {
    image: DogHudsonPhoto,
    name: "Hudson",
    race: "Pies",
    views: "1000",
  },
  {
    image: DogFrankPhoto,
    name: "Frank",
    race: "Pies",
    views: "500",
  },
  {
    image: DogJazzyPhoto,
    name: "Jazzy",
    race: "Pies",
    views: "200",
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
