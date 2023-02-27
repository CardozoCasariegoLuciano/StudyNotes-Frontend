import { IFormValidateData } from "../../interfaces/Forms.interface";
import {
  IFormValidations,
  IFormValidationsErrors,
} from "../../interfaces/Validator.interface";

export const FormValidator = (
  actual: IFormValidationsErrors,
  validations: IFormValidateData,
  name: string,
  value: string | number | boolean
): IFormValidationsErrors => {

  const rules: IFormValidations = validations[name];
  if (!rules) return {};

  const rulesByInput: string[] = Object.keys(rules);

  if (!actual[name]) {
    actual[name] = {};
  }

  if (
    rulesByInput.includes("required") &&
    rules["required"] &&
    String(value).length <= 0
  ) {
    actual[name].required =
      generateDefaultErrorMessagge(name).required.messagge;
  } else {
    delete actual[name].required;
  }

  if (rulesByInput.includes("regex") && !rules["regex"]!.test(String(value))) {
    actual[name].regex = generateDefaultErrorMessagge(name).regex.messagge;
  } else {
    delete actual[name].regex;
  }

  if (
    rulesByInput.includes("email") &&
    rules["email"] &&
    !emailRegex.test(String(value))
  ) {
    actual[name].email = generateDefaultErrorMessagge(name).email.messagge;
  } else {
    delete actual[name].email;
  }

  if (rulesByInput.includes("min") && String(value).length <= rules["min"]!) {
    actual[name].min = generateDefaultErrorMessagge(
      name,
      rules["min"]
    ).min.messagge;
  } else {
    delete actual[name].min;
  }

  if (rulesByInput.includes("max") && String(value).length >= rules["max"]!) {
    actual[name].max = generateDefaultErrorMessagge(
      name,
      rules["max"]
    ).max.messagge;
  } else {
    delete actual[name].max;
  }

  return actual;
};

const generateDefaultErrorMessagge = (
  name: string,
  value?: string | number
): IFormValidationsErrors => {
  return {
    required: { messagge: `${name} field is requiered` },
    regex: { messagge: `${name} not match the regex` },
    email: { messagge: `${name} is not a valid email` },
    min: { messagge: `${name} must have more than ${value} characters` },
    max: { messagge: `${name} must have less than ${value} characters` },
  };
};

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
