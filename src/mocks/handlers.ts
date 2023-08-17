import { loginHandler } from "./handlers/loginHandler"
import { refreshTokenHandler } from "./handlers/refreshTokenHandler"
import { registerHandler } from "./handlers/registerHandler"
import { resetPasswordHandler } from "./handlers/resetPasswordHandler"
import { setNewPasswordHandler } from "./handlers/setNewPasswordHandler"
import { shelterStatsHandler } from "./handlers/shelterStatsHandler"
import { mostPopularPetsHandler } from "./handlers/mostPopularPetsHandler"
import { newestPetsHandler } from "./handlers/newestPetsHandler"


export const user = {
    email: "test@test.pl",
    password: "123456789"
}

export const handlers = [
  loginHandler,
  refreshTokenHandler,
  registerHandler,
  resetPasswordHandler,
  setNewPasswordHandler,
  shelterStatsHandler,
  mostPopularPetsHandler,
  newestPetsHandler
]