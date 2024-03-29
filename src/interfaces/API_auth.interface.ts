import { APIError } from './API_response.interface';

export type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  confirmation: string;
};

export type LoginFormData = {
  email: string;
  password: string;
  remember: boolean;
};

export type AuthReuslt = {
  login: (_formData: LoginFormData) => Promise<APIError | null>;
  register: (_formData: RegisterFormData) => Promise<APIError | null>;
  logOut: () => void;
};

export interface APISuccessRegister {
  data: {
    token: string;
  };
  message: string;
  message_type: string;
}

export interface APISuccessLogin {
  data: {
    token: string;
    userName: string;
    email: string;
  };
  message: string;
  message_type: string;
}
