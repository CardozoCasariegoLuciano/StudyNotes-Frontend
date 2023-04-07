import axios, { AxiosError } from "axios";
import { UrlBank } from "../helpers/URLs";
import {
  APISuccessAuth,
  RegisterFormData,
  RegisterResult,
} from "../interfaces/API_auth.interface";
import { APIError } from "../interfaces/API_response.interface";

const useRegister = (): RegisterResult => {
  let apiError: APIError | null = null;

  const register = async (
    formData: RegisterFormData
  ): Promise<APIError | null> => {
    try {
      const registerData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmation,
      };

      const resp = await axios.post(UrlBank.auth.register, registerData);
      const data = resp.data as APISuccessAuth;

      localStorage.setItem("token", JSON.stringify(data.data.token));
      localStorage.setItem(
        "user",
        JSON.stringify({ name: formData.name, email: formData.email })
      );

      apiError = null;
    } catch (err) {
      const axiosError = err as AxiosError;
      apiError = axiosError.response?.data as APIError;
    }
    return apiError;
  };

  return { register };
};

export default useRegister;
