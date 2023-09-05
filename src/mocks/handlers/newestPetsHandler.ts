import { rest } from "msw"
import WhiteCatPhoto from "assets/photos/WhiteCatPhoto.png"
import BlackWhiteCatPhoto from "assets/photos/BlackWhiteCatPhoto.png"
import DogPhoto from "assets/photos/DogPhoto.png"

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


export const newestPetsHandler = rest.get<newestPetsHandlerTypes>(
  "/shelters/newestPets",
  async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({items: newestPetsHandlerContent})
    )
  }
)
