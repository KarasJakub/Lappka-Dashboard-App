import React, { useState } from "react";
import { createContext } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { UseFormSetError } from "react-hook-form";
import { FormData } from "components/LoginRegisterWrapper/SubComponents/FormContents/FormContentLogin/FormContentLogin";
import { ResetPasswordFormData } from "components/LoginRegisterWrapper/SubComponents/FormContents/FormContentResetPassword/FormContentResetPassword";
import axios from "axios";
import ROUTES from "helpers/utils/routes";

interface AuthProps {
  children: React.ReactNode;
}

type AuthContextType = {
  loginHandler: (
    data: logInPayload,
    setError: UseFormSetError<FormData>
  ) => void;
  resetPasswordEmailSendHandler: (
    data: resetPasswordPayload,
    setError: UseFormSetError<ResetPasswordFormData>
  ) => void;
  rememberMe: boolean;
  setRememberMe: (rembemberMe: boolean) => void;
  isLoggedIn: boolean;
};

type logInPayload = {
  email: string;
  password: string;
};

type resetPasswordPayload = {
  email: string;
};

type refreshTokenHandler = {
  refreshToken: string;
};

interface DecodedAccessToken {
  iss: string;
  iat: number;
  exp: number;
  aud: string;
  sub: string;
  GivenName: string;
  Surname: string;
  Email: string;
  Role: string[];
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthProps) => {
  const [rememberMe, setRememberMe] = useState(false);
  const isLoggedIn = localStorage.getItem("tokens") !== null;

  const navigate = useNavigate();

  const refreshTokenHandler = async (payload: refreshTokenHandler) => {
    try {
      const response = await axios.post("/auth/useToken", { payload });
      const data = await response.data;

      localStorage.setItem(
        "tokens",
        JSON.stringify({
          accessToken: data.token.accessToken,
        })
      );

      navigate(ROUTES.home, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = async (payload: logInPayload, setError: any) => {
    try {
      const response = await axios.post("/Auth/loginWeb", {
        email: payload.email,
        password: payload.password,
      });

      localStorage.setItem(
        "tokens",
        JSON.stringify({
          accessToken: response.data.token.accessToken,
          refreshToken: response.data.token.refreshToken,
        })
      );

      navigate(ROUTES.home, { replace: true });
    } catch (error: any) {
      const { type, message } = error.response.data;
      if (type === "email") {
        setError("email", { type, message });
      }
      if (type === "password") {
        setError("password", { type, message });
      }
    }
  };

  const resetPasswordEmailSendHandler = async (
    payload: resetPasswordPayload,
    setError: any
  ) => {
    try {
      const response = await axios.post("/Auth/resetPassword", {
        email: payload.email,
      });

      navigate(ROUTES.resetpasswordthanks, { replace: true });
    } catch (error: any) {
      const { type, message } = error.response.data;
      if (type === "email") {
        setError("email", { type, message });
      }
    }
  };

  const expiredAccessTokenHandler = () => {
    const tokens = localStorage.getItem("tokens");

    if (tokens) {
      const decodedAccesssToken: DecodedAccessToken = jwt_decode(
        JSON.parse(tokens).accessToken
      );

      const currentTime = Date.now() / 1000;

      if (decodedAccesssToken.exp < currentTime) {
        localStorage.removeItem("tokens");

        refreshTokenHandler(JSON.parse(tokens).refreshToken);

        navigate(ROUTES.login);
      }
    } else {
      return;
    }
  };

  expiredAccessTokenHandler();

  setInterval(expiredAccessTokenHandler, 60000);

  return (
    <AuthContext.Provider
      value={{
        loginHandler,
        setRememberMe,
        rememberMe,
        isLoggedIn,
        resetPasswordEmailSendHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
