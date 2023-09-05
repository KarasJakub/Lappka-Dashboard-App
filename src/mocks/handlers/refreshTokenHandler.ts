import { rest } from "msw";

export const refreshTokenHandler = rest.post('/Auth/useToken', async (req, res, ctx) => {
    const {payload:{refreshToken}} = await await req.json()

    // server compare refreshToken and return new AccessToken
    return res(ctx.status(200), ctx.json({accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2ODk3NTc3MTEsImV4cCI6MTcyMTI5NDI1NCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.ObFWallg9VB6l3uxzSRtuzaRSAH5vnmmhmO9wA5hWpM"}))
  })