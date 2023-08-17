import { rest } from "msw"

export interface mostPopularPetsHandlerTypes {
  cardCount: number
  toAdoptCount: number
  volunteerCount: number
  adoptedCount: number
}


export const mostPopularPetsHandler = rest.get<mostPopularPetsHandlerTypes>(
  "/shelters/popularPets",
  async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        cardCount: 235,
        toAdoptCount: 35,
        adoptedCount: 200,
        volunteerCount: 25,
      })
    )
  }
)
