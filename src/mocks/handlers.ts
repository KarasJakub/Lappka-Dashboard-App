import { rest } from "msw"
import { token } from "./tokens"

const user = {
    email: "test@test.pl",
    password: "123456789"
}

interface LoginProps {
    email: string;
    password: string;
  }

  export const handlers = [
    rest.post<LoginProps>('/login', async (req, res, ctx) => {
      sessionStorage.setItem('is-authenticated', 'true');

      const { email, password } = await req.json();

      if (
        email === user.email &&
        password === user.password
      ) {
        return res(ctx.status(200), ctx.json({ token }));
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
    }),
  ];