import { IFormValidations } from "./Validator.interface";

export type IFormState = {
  [key: string]: string | number;
};

export type IFormValidateData = {
  [key: string]: IFormValidations;
};
