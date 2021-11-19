import { useState } from "react";

import LogInFormInput from "../types/formInputs/logInFormInput.interface";
import { axios } from "../lib/axios";

export default function useLogin() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const login = async ({ email, password }: LogInFormInput) => {
    setIsLoading(true);
    setError("");

    try {
      await axios.post("auth/login", {
        email: email.toLowerCase().trim(),
        password: password,
      });

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.response.data.message);
    }
  };

  return { login, isLoading, error };
}
