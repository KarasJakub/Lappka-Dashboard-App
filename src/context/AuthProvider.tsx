import { createContext, useReducer } from "react";

interface AuthProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({});

export const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: AuthProps) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
