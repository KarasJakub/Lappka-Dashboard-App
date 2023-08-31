import { productionClient } from "../client"
import {
  RefreshTokenHandlerTypes,
  loginHandlerProps,
  resetPasswordHandlerProps,
} from "./AuthTypes"

type setNewPasswordHandlerProps = {
  password: string
  confirmPassword: string
  onNextStep: () => void
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
    const { Code, Description } = error.response.data
    if (Code === "invalid_email") {
      setErrorHandler({ type: Code, message: Description })
    }
    if (Code === "invalid_password") {
      setErrorHandler({ type: Code, message: Description })
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

export const resetPasswordHandler = async ({
  email,
  // onNextStep,
  setErrorHandler,
}: resetPasswordHandlerProps) => {
  try {
    const response = await productionClient.post("Auth/resetPassword", {
      email: email,
    })
    if (response.status === 204) {
      // onNextStep()
    }
  } catch (error: any) {
    const { Code } = error.response.data.errors[0]
    if (Code === "invalid_mail") {
      setErrorHandler(Code)
    }
  }
}

export const setNewPasswordHandler = async ({
  password,
  confirmPassword,
  onNextStep,
}: setNewPasswordHandlerProps) => {
  try {
    const response = await productionClient.post("Auth/setPassword/000000000", {
      password: password,
      confirmPassword: confirmPassword,
    })
    if (response.status === 204) {
      onNextStep()
    }
  } catch (error: any) {
    console.log(error)
  }
}
