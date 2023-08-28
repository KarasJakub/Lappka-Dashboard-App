import { useState, useEffect, useCallback } from "react"

import jwt_decode from "jwt-decode"

import { useRefreshTokenHandler } from "api/auth/AuthHooks"

interface DecodedAccessToken {
  iss: string
  iat: number
  exp: number
  aud: string
  sub: string
  GivenName: string
  Surname: string
  Email: string
  Role: string[]
}

export const useRefreshToken = () => {
  const [tokenIsExpired, setTokenIsExpired] = useState(false)

  const { mutate } = useRefreshTokenHandler()

  const handleCheckToken = useCallback(() => {
    const accessToken = localStorage.getItem("accessToken")

    if (accessToken) {
      const decodedAccesssToken: DecodedAccessToken = jwt_decode(accessToken)
      const currentTime = Date.now() / 1000

      if (decodedAccesssToken.exp < currentTime) {
        setTokenIsExpired(true)
      }
    }
  }, [])

  const refreshHandler = useCallback(async () => {
    const setTokenExpiredHandler = () => {
      setTokenIsExpired(false)
    }
    mutate({ tokenIsExpired, setTokenExpiredHandler })
  }, [tokenIsExpired, mutate])

  useEffect(() => {
    const interval = setInterval(handleCheckToken, 3000)
    return () => clearInterval(interval)
  }, [handleCheckToken])

  useEffect(() => {
    if (localStorage.getItem("accessToken") && tokenIsExpired) {
      refreshHandler()
    }
  }, [tokenIsExpired, refreshHandler])

  return { handleCheckToken, tokenIsExpired }
}
