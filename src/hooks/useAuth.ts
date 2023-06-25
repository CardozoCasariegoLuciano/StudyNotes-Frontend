import axios, { AxiosError } from "axios";
import { manageAPIErrors } from "../helpers/apiErrors";
import { UrlBank } from "../helpers/URLs";
import { getStorage, setStorage } from "../helpers/webStorage";
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
    const reqBody = {
      email: loginData.email,
      password: loginData.password,
    };

    try {
      const axiosResp = await axios.post(UrlBank.auth.login, reqBody);
      const res = axiosResp.data as APISuccessLogin;

      const user = {
        name: res.data.userName,
        email: res.data.email,
      };

      setStorage("token", JSON.stringify(res.data.token), loginData.remember);
      setStorage("user", JSON.stringify(user), loginData.remember);

      apiError = null;
    } catch (err) {
      apiError = manageAPIErrors(err as AxiosError);
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

      const axiosResponse = await axios.post(
        UrlBank.auth.register,
        registerData
      );
      const resp = axiosResponse?.data as APISuccessRegister;

      localStorage.setItem("token", JSON.stringify(resp.data.token));
      localStorage.setItem(
        "user",
        JSON.stringify({ name: formData.name, email: formData.email })
      );

      apiError = null;
    } catch (err) {
      apiError = manageAPIErrors(err as AxiosError);
    }
    return apiError;
  };

  {
    /* TODO: LogOut dom 23 abr 2023 11:46:13  */
  }

  return { login, register };
};

export default useAuth;
