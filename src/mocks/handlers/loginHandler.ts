import { token } from "../tokens"
import { rest } from "msw"
import { user } from "../handlers"

interface LoginProps {
    email: string
    password: string
  }


export const loginHandler = rest.post<LoginProps>('/Auth/loginWeb', async (req, res, ctx) => {
    sessionStorage.setItem('is-authenticated', 'true')

    const { email, password } = await req.json()

    if (
      email === user.email &&
      password === user.password
    ) {
      return res(ctx.status(200), ctx.json({ token }))
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

    if (
      email === user.email &&
      password !== user.password
    ) {
      return res(
        ctx.status(404),
        ctx.json({
          type: 'password',
          message: 'Hasło jest niepoprawne',
        })
      );
    }
  })