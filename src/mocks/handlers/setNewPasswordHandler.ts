import { rest } from "msw";

export const setNewPasswordHandler =   rest.post(
    "/Auth/setNewPassword",
    async (req, res, ctx) => {
      const { password, confirmPassword } = await req.json();
      try {
        if (password !== confirmPassword) {
          return res(
            ctx.status(400),
            ctx.json({ message: "Hasła nie są takie same" })
          );
        }
        return res(ctx.status(200), ctx.json({ message: "Hasło zostało zaktualizowane" }));
      } catch (error) {
        console.error(error);
        return res(ctx.status(500), ctx.json({ message: "Server error" }));
      }
    }
  )