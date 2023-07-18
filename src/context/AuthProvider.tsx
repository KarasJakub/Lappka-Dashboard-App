import React from "react";
import { createContext, useReducer } from "react";

interface AuthProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }: AuthProps) => {
  const [authUser, setAuthUser] = React.useState();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
