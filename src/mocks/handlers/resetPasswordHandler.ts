import {rest} from "msw"
import {user} from "../handlers"

export const resetPasswordHandler =   rest.post(
    "/Auth/resetPassword",
    async (req, res, ctx) => {
      const { email } = await req.json();

      try {
        if (email === "test@test.pl") return res(ctx.status(204));

        if (!email) {
          return res(
            ctx.status(400),
            ctx.json({ message: "Bad request", yourRequest: email })
          );
        }

        if (email !== user.email) {
          return res(
            ctx.status(401),
            ctx.json({
              type: 'email',
              message: 'Ten uzytkownik nie istnieje',
            })
          );
        }

      } catch (error) {
        console.error(error);

        return res(ctx.status(500), ctx.json({ message: "Server error" }));
      }
    }
  )