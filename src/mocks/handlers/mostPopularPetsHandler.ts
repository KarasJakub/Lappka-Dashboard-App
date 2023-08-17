import { rest } from "msw"
import WhiteCatPhoto from "assets/photos/WhiteCatPhoto.png"
import BlackWhiteCatPhoto from "assets/photos/BlackWhiteCatPhoto.png"
import DogHudsonPhoto from "assets/photos/DogHudsonPhoto.png"
import DogFrankPhoto from "assets/photos/DogFrankPhoto.png"
import DogJazzyPhoto from "assets/photos/DogJazzyPhoto.png"


export interface mostPopularPetsHandlerTypes {
  items: [
    {
    image: string
    name: string
    race: string
    date: string
    views: number
    }
  ]
}

const PopularPetsCardsContent = [
  {
    image: WhiteCatPhoto,
    name: "Ninka",
    race: "Kot",
    date: "06.08.2022",
    views: 11200,
  },
  {
    image: BlackWhiteCatPhoto,
    name: "Ninka",
    race: "Kot",
    date: "06.08.2022",
    views: 1100,
  },
  {
    image: DogHudsonPhoto,
    name: "Hudson",
    race: "Pies",
    date: "06.08.2022",
    views: 1000,
  },
  {
    image: DogFrankPhoto,
    name: "Frank",
    race: "Pies",
    date: "06.08.2022",
    views: 500,
  },
  {
    image: DogJazzyPhoto,
    name: "Jazzy",
    race: "Pies",
    date: "06.08.2022",
    views: 200,
  },
]

export const mostPopularPetsHandler = rest.get<mostPopularPetsHandlerTypes>(
  "/shelters/popularPets",
  async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({items: PopularPetsCardsContent})
    )
  }
)
