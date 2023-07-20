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

  rest.post('/auth/usetoken', async (req, res, ctx) => {
    const {payload:{refreshToken}} = await await req.json()

    // server compare refreshToken and return new AccessToken
    return res(ctx.status(200), ctx.json({accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2ODk3NTc3MTEsImV4cCI6MTcyMTI5NDI1NCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.ObFWallg9VB6l3uxzSRtuzaRSAH5vnmmhmO9wA5hWpM"}));
  }),
  ];