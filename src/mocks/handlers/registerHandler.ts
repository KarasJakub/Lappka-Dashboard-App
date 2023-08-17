import { rest } from "msw"

export const registerHandler = rest.post(
    "/Auth/shelterRegister",
    (req, res, ctx) => {
      return res(ctx.status(200));
    }
)