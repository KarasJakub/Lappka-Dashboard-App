import { rest } from "msw"
import WhiteCatPhoto from "assets/photos/WhiteCatPhoto.png"
import BlackWhiteCatPhoto from "assets/photos/BlackWhiteCatPhoto.png"
import DogFrankPhoto from "assets/photos/DogFrankPhoto.png"
import DogJazzyPhoto from "assets/photos/DogJazzyPhoto.png"
import DogPhoto from "assets/photos/DogPhoto.png"
import { PopularPetsCardsContent } from "./mostPopularPetsHandler"
import FancyPhoto from "assets/photos/Messages/KrystynaPhoto.png"

export interface newestPetsHandlerTypes {
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

const newestPetsHandlerContent = [
  {
    image: WhiteCatPhoto,
    name: "Ninka",
    race: "Kot",
    date: "06.08.2022",
    views: 11200,
  },
  {
    image: DogPhoto,
    name: "Bella",
    race: "Pies",
    date: "06.08.2022",
    views: 1100,
  },
  {
    image: BlackWhiteCatPhoto,
    name: "Candy",
    race: "Kot",
    date: "06.08.2022",
    views: 1000,
  },
]

// const newestPetsHandlerContent = [
//   {
//     image: FancyPhoto,
//     name: "Ninka",
//     race: "Kot",
//     date: "06.08.2022",
//     views: 11200,
//   },
//   {
//     image: FancyPhoto,
//     name: "Bella",
//     race: "Pies",
//     date: "06.08.2022",
//     views: 1100,
//   },
//   {
//     image: FancyPhoto,
//     name: "Candy",
//     race: "Kot",
//     date: "06.08.2022",
//     views: 1000,
//   },
// ]

export const newestPetsHandler = rest.get<newestPetsHandlerTypes>(
  "/shelters/newestPets",
  async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({items: newestPetsHandlerContent})
    )
  }
)
