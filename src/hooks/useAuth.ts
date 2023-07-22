import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { manageAPIErrors } from "../helpers/apiErrors";
import { UrlBank } from "../helpers/URLs";
import { removeStorage, setStorage } from "../helpers/webStorage";
import {
  APISuccessLogin,
  APISuccessRegister,
  AuthReuslt,
  LoginFormData,
  RegisterFormData,
} from "../interfaces/API_auth.interface";
import { APIError } from "../interfaces/API_response.interface";
import useUser from "./useUser";

const useAuth = (): AuthReuslt => {
  const { logOut: logout} = useUser();
  const navigate = useNavigate();
  let apiError: APIError | null = null;

  const login = async (loginData: LoginFormData): Promise<APIError | null> => {
    const reqBody = {
      email: loginData.email,
      password: loginData.password,
    };

    try {
      const axiosResp = await axios.post(UrlBank.auth.login, reqBody);
      const res = axiosResp.data as APISuccessLogin;

      setStorage("token", JSON.stringify(res.data.token), loginData.remember);

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

      setStorage("token", JSON.stringify(resp.data.token), true);

      apiError = null;
    } catch (err) {
      apiError = manageAPIErrors(err as AxiosError);
    }
    return apiError;
  };

  const logOut = () => {
    removeStorage("token");
    logout();
    navigate("/auth/login");
  };

  return { login, register, logOut };
};

export default useAuth;
