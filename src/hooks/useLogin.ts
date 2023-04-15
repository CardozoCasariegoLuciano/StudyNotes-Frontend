import axios, { AxiosError } from "axios";
import { UrlBank } from "../helpers/URLs";
import {
  APISuccessAuth,
  LoginFormData,
  LoginResult,
} from "../interfaces/API_auth.interface";
import { APIError } from "../interfaces/API_response.interface";

const useLogin = ():LoginResult => {
  let apiError: APIError | null = null;

  const login = async (loginData: LoginFormData): Promise<APIError | null> => {
    try {
      const resp = await axios.post(UrlBank.auth.login, loginData);
      const data = resp.data as APISuccessAuth;

      localStorage.setItem("token", JSON.stringify(data.data.token));

      apiError = null;
    } catch (err) {
      const axiosError = err as AxiosError;
      apiError = axiosError.response?.data as APIError;
    }
    return apiError;
  };

  return { login };
};

export default useLogin;
