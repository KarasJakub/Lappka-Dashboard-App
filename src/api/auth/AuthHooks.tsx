import { useMutation } from "@tanstack/react-query"
import { resetPasswordHandler, loginHandler, refreshTokenHandler } from "./Auth"

export const useResetPasswordHandler = () => {
  return useMutation(resetPasswordHandler)
}

export const useLoginHandler = () => {
  return useMutation(loginHandler)
}

export const useRefreshTokenHandler = () => {
  return useMutation(refreshTokenHandler)
}
