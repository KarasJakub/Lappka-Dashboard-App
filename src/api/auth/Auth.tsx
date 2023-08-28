import { productionClient } from "../client"
import {
  RefreshTokenHandlerTypes,
  loginHandlerProps,
  resetPasswordHandlerProps,
} from "./AuthTypes"

export const resetPasswordHandler = async ({
  email,
  onNextStep,
  setErrorHandler,
}: resetPasswordHandlerProps) => {
  try {
    const response = await productionClient.post("Auth/resetPassword", {
      email: email,
    })
    if (response.status === 204) {
      onNextStep()
    }
  } catch (error: any) {
    const { Code } = error.response.data.errors[0]
    if (Code === "invalid_mail") {
      setErrorHandler(Code)
    }
  }
}

export const loginHandler = async ({
  data,
  setErrorHandler,
  navigateHandler,
}: loginHandlerProps) => {
  try {
    const response = await productionClient.post("Auth/loginWeb", {
      email: data.email,
      password: data.password,
    })

    localStorage.setItem("accessToken", response.data.accessToken)
    localStorage.setItem("refreshToken", response.data.refreshToken)

    navigateHandler()
  } catch (error: any) {
    const { type, message } = error.response.data
    if (type === "email") {
      setErrorHandler({ type, message })
    }
    if (type === "password") {
      setErrorHandler({ type, message })
    }
  }
}

export const refreshTokenHandler = async ({
  tokenIsExpired,
  setTokenExpiredHandler,
}: RefreshTokenHandlerTypes) => {
  try {
    const response = await productionClient.post("Auth/useToken", {
      accessToken: localStorage.getItem("accessToken"),
      refreshToken: localStorage.getItem("refreshToken"),
    })
    localStorage.setItem("accessToken", response.data.accessToken)
  } catch (error) {
    if (error) {
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
      console.log(error)
    }
  } finally {
    if (tokenIsExpired) {
      setTokenExpiredHandler()
    }
  }
}
