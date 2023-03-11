import { ChangeEvent, useState } from "react";
import { FormValidator } from "../helpers/Validators/FormValidators";
import { IFormValidateData, IFormState } from "../interfaces/Forms.interface";
import { IFormValidationsErrors } from "../interfaces/Validator.interface";

const initialErrors = (form: IFormState) => {
  const result: IFormValidationsErrors = {};

  const temp = Object.keys(form);
  temp.forEach((name) => {
    result[name] = {};
  });

  return result;
};

export const useForm = <T extends IFormState>(
  initialForm: T,
  validations: IFormValidateData,
  customMessagges?: IFormValidationsErrors
) => {
  const [formState, setFormState] = useState<T>(initialForm);
  const [formErrors, setFormErrors] = useState<IFormValidationsErrors>(
    initialErrors(formState)
  );
  const [_, setClickSubmit] = useState(false);

  const onInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });

    if (value.length <= 0) {
      setFormErrors((actual) => ({ ...actual, [name]: {} }));
    } else {
      setFormErrors(
        FormValidator(formErrors, validations, name, value, customMessagges)
      );
    }
  };

  const onBlur = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    onInputChange(event);
    setFormErrors(
      FormValidator(formErrors, validations, name, value, customMessagges)
    );
  };

  const hasErrors = (): boolean => {
    let result = false;
    const formErrorsNames = Object.keys(formErrors);

    formErrorsNames.forEach((name) => {
      const value = Object.keys(formErrors[name]);
      if (value.length > 0) result = true;
    });

    return result;
  };

  const onSubmitErrors = () => {
    const formStateNames = Object.keys(formState);

    formStateNames.forEach((name) => {
      const value = formState[name];
      setFormErrors(
        FormValidator(formErrors, validations, name, value, customMessagges)
      );
    });
  };

  const onSubmit = (ev: ChangeEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setClickSubmit(true);
    onSubmitErrors();

    if (!hasErrors()) {
      onResetForm();
    }
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    onSubmit,
    ...formState,
    formState,
    formErrors,
    hasErrors,
    onInputChange,
    onBlur,
    onResetForm,
  };
};
