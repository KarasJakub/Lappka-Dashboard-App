import { rest } from "msw"

export interface ShelterStatsTypes {
  cardCount: number
  toAdoptCount: number
  volunteerCount: number
  adoptedCount: number
}


export const shelterStatsHandler = rest.get<ShelterStatsTypes>(
  "/shelters/stats",
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
