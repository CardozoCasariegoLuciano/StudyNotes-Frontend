import axios, { AxiosError } from "axios";
import { UrlBank } from "../helpers/URLs";
import {
  APISuccessLogin,
  APISuccessRegister,
  AuthReuslt,
  LoginFormData,
  RegisterFormData,
} from "../interfaces/API_auth.interface";
import { APIError } from "../interfaces/API_response.interface";

const useAuth = (): AuthReuslt => {
  let apiError: APIError | null = null;

  const login = async (loginData: LoginFormData): Promise<APIError | null> => {
    try {
      const resp = await axios.post(UrlBank.auth.login, loginData);
      const data = resp.data as APISuccessLogin;

      const user = {
        name: data.data.userName,
        email: data.data.email,
      };

      localStorage.setItem("token", JSON.stringify(data.data.token));
      localStorage.setItem("user", JSON.stringify(user));

      apiError = null;
    } catch (err) {
      const axiosError = err as AxiosError;
      apiError = axiosError.response?.data as APIError;
    }
    return apiError;
  };

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
      const data = resp.data as APISuccessRegister;

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

  {
    /* TODO: LogOut dom 23 abr 2023 11:46:13  */
  }

  return { login, register };
};

export default useAuth;
