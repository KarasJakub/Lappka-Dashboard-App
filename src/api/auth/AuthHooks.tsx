import { useMutation } from "@tanstack/react-query"
import { loginHandler, refreshTokenHandler } from "./Auth"

export const useLoginHandler = () => {
  return useMutation(loginHandler)
}

export const useRefreshTokenHandler = () => {
  return useMutation(refreshTokenHandler)
}
