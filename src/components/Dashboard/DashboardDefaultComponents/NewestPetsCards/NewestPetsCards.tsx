import * as S from "./NewestPetsCards.styled"
import CardHeading from "components/global/CardHeading/CardHeading"
import ButtonComponent from "components/global/Button/ButtonComponent.styled"
import NewPetCard from "./NewPetCard/NewPetCard"
import WhiteCatPhoto from "assets/photos/WhiteCatPhoto.png"
import DogPhoto from "assets/photos/DogPhoto.png"
import BlackWhiteCatPhoto from "assets/photos/BlackWhiteCatPhoto.png"
import Typography from "components/global/Typography/Typography"

const PetsCardsContent = [
  {
    image: WhiteCatPhoto,
    name: "Ninka",
    race: "Kot",
    date: "06.08.2022",
  },
  {
    image: DogPhoto,
    name: "Bella",
    race: "Pies",
    date: "06.08.2022",
  },
  {
    image: BlackWhiteCatPhoto,
    name: "Candy",
    race: "Kot",
    date: "06.08.2022",
  },
]

const NewestPetsCards = () => {
  return (
    <S.NewestPetsRootWrapper>
      <CardHeading title="Najnowsze karty zwierząt">
        <ButtonComponent
          className="secondary"
          size="Large"
          style={{ maxWidth: "9rem" }}
        >
          Wszystkie
        </ButtonComponent>
      </CardHeading>
      <S.NewestPetsInnerWrapper>
        {PetsCardsContent.slice(0, 3).map((pet) => (
          <NewPetCard
            image={pet.image}
            name={pet.name}
            race={pet.race}
            date={pet.date}
          />
        ))}
      </S.NewestPetsInnerWrapper>
    </S.NewestPetsRootWrapper>
  )
}

export default NewestPetsCards
