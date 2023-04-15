import { APIError } from "./API_response.interface";

export type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  confirmation: string;
};

export type RegisterResult = {
  register: (formData: RegisterFormData) => Promise<APIError | null>;
};


export interface APISuccessAuth {
  data: {
    token: string;
  };
  message: string;
  message_type: string;
}
