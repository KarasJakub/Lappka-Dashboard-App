import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

interface LoginProps {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
};
